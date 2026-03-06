import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppColors } from '@/constants/theme';

export type Location = { id: string; icon: string; name: string };
export type StorageBox = { id: string; name: string; color: string; locationId: string | null };

type BoxStore = {
  locations: Location[];
  boxes: StorageBox[];
  addLocation: (data: Omit<Location, 'id'>) => void;
  deleteLocation: (id: string) => void;
  addBox: (data: Omit<StorageBox, 'id'>) => void;
  deleteBox: (id: string) => void;
  assignBox: (boxId: string, locationId: string | null) => void;
};

const INITIAL_LOCATIONS: Location[] = [
  { id: '1', icon: '🎨', name: 'Art Studio' },
  { id: '2', icon: '🏠', name: 'Home' },
  { id: '3', icon: '🏪', name: 'Game Store' },
];

const INITIAL_BOXES: StorageBox[] = [
  { id: '1', name: 'Box A', color: AppColors.boxRed, locationId: null },
  { id: '2', name: 'Box B', color: AppColors.boxBlue, locationId: null },
  { id: '3', name: 'Box C', color: AppColors.boxGreen, locationId: null },
];

export const useBoxStore = create<BoxStore>()(
  persist(
    (set) => ({
      locations: INITIAL_LOCATIONS,
      boxes: INITIAL_BOXES,
      addLocation: (data) => {
        set((state) => ({
          locations: [
            ...state.locations,
            { ...data, id: String(Date.now()) },
          ],
        }));
      },
      deleteLocation: (id) => {
        set((state) => ({
          locations: state.locations.filter((l) => l.id !== id),
        }));
      },
      addBox: (data) => {
        set((state) => ({
          boxes: [...state.boxes, { ...data, id: String(Date.now()) }],
        }));
      },
      deleteBox: (id) => {
        set((state) => ({
          boxes: state.boxes.filter((b) => b.id !== id),
        }));
      },
      assignBox: (boxId, locationId) => {
        set((state) => ({
          boxes: state.boxes.map((b) =>
            b.id === boxId ? { ...b, locationId } : b
          ),
        }));
      },
    }),
    { name: 'box-store', storage: createJSONStorage(() => AsyncStorage) }
  )
);
