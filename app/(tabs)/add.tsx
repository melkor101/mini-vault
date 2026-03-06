import { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { addStyles } from './add.styles';
import { useMiniatureStore, MiniatureStatus } from '@/store/miniature-store';

const PAINT_STATUS_OPTIONS = ['Unpainted', 'Primed', 'In Progress', 'Completed'];

const STATUS_MAP: Record<string, MiniatureStatus> = {
  Unpainted: 'unpainted',
  Primed: 'primed',
  'In Progress': 'inProgress',
  Completed: 'completed',
};
const STORAGE_BOX_OPTIONS = ['Box A', 'Box B', 'Box C'];

type FormState = {
  name: string;
  manufacturer: string;
  type: string;
  paintStatus: string;
  storageBox: string;
  notes: string;
};

const AddScreen = () => {
  const router = useRouter();
  const { addMiniature } = useMiniatureStore();
  const [form, setForm] = useState<FormState>({
    name: '',
    manufacturer: '',
    type: '',
    paintStatus: 'Unpainted',
    storageBox: '',
    notes: '',
  });
  const [openDropdown, setOpenDropdown] = useState<'paintStatus' | 'storageBox' | null>(null);

  const toggleDropdown = (key: 'paintStatus' | 'storageBox') => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const selectOption = (key: 'paintStatus' | 'storageBox', value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setOpenDropdown(null);
  };

  const handleSubmit = () => {
    if (!form.name.trim()) return;
    addMiniature({
      name: form.name,
      brand: form.manufacturer,
      type: form.type,
      status: STATUS_MAP[form.paintStatus] ?? 'unpainted',
      storageBox: form.storageBox,
    });
    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <SafeAreaView style={addStyles.screen}>
      <ScrollView
        style={addStyles.screen}
        contentContainerStyle={addStyles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={addStyles.header}>
          <Image source={require('@/assets/images/logo.png')} style={addStyles.appIconImage} />
          <Text style={addStyles.appTitle}>MiniVault</Text>
        </View>

        <View style={addStyles.hero}>
          <View style={addStyles.heroIconCircle}>
            <Text style={addStyles.heroIconText}>✦</Text>
          </View>
          <Text style={addStyles.heroTitle}>Add Miniature</Text>
          <Text style={addStyles.heroSubtitle}>Add a new model to your collection</Text>
        </View>

        <View style={addStyles.formCard}>
          <View style={addStyles.fieldGroup}>
            <Text style={addStyles.label}>Name *</Text>
            <TextInput
              style={addStyles.input}
              placeholder="e.g., Space Marine Captain"
              placeholderTextColor="#AAA"
              value={form.name}
              onChangeText={(v) => setForm((p) => ({ ...p, name: v }))}
            />
          </View>

          <View style={addStyles.fieldGroup}>
            <Text style={addStyles.label}>Manufacturer</Text>
            <TextInput
              style={addStyles.input}
              placeholder="e.g., Games Workshop"
              placeholderTextColor="#AAA"
              value={form.manufacturer}
              onChangeText={(v) => setForm((p) => ({ ...p, manufacturer: v }))}
            />
          </View>

          <View style={addStyles.fieldGroup}>
            <Text style={addStyles.label}>Type</Text>
            <TextInput
              style={addStyles.input}
              placeholder="e.g., Infantry, Vehicle, Monster"
              placeholderTextColor="#AAA"
              value={form.type}
              onChangeText={(v) => setForm((p) => ({ ...p, type: v }))}
            />
          </View>

          <View style={addStyles.fieldGroup}>
            <Text style={addStyles.label}>Paint Status</Text>
            <TouchableOpacity
              style={addStyles.pickerButton}
              onPress={() => toggleDropdown('paintStatus')}
              activeOpacity={0.7}
            >
              <Text style={addStyles.pickerButtonText}>{form.paintStatus}</Text>
              <Text style={addStyles.pickerChevron}>
                {openDropdown === 'paintStatus' ? '▲' : '▾'}
              </Text>
            </TouchableOpacity>
            {openDropdown === 'paintStatus' && (
              <View style={addStyles.dropdown}>
                {PAINT_STATUS_OPTIONS.map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={[
                      addStyles.dropdownItem,
                      form.paintStatus === option && addStyles.dropdownItemSelected,
                    ]}
                    onPress={() => selectOption('paintStatus', option)}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        addStyles.dropdownItemText,
                        form.paintStatus === option && addStyles.dropdownItemTextSelected,
                      ]}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <View style={addStyles.fieldGroup}>
            <Text style={addStyles.label}>Storage Box</Text>
            <TouchableOpacity
              style={addStyles.pickerButton}
              onPress={() => toggleDropdown('storageBox')}
              activeOpacity={0.7}
            >
              <Text style={[addStyles.pickerButtonText, !form.storageBox && { color: '#AAA' }]}>
                {form.storageBox || 'Select a box'}
              </Text>
              <Text style={addStyles.pickerChevron}>
                {openDropdown === 'storageBox' ? '▲' : '▾'}
              </Text>
            </TouchableOpacity>
            {openDropdown === 'storageBox' && (
              <View style={addStyles.dropdown}>
                {STORAGE_BOX_OPTIONS.map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={[
                      addStyles.dropdownItem,
                      form.storageBox === option && addStyles.dropdownItemSelected,
                    ]}
                    onPress={() => selectOption('storageBox', option)}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        addStyles.dropdownItemText,
                        form.storageBox === option && addStyles.dropdownItemTextSelected,
                      ]}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <View style={addStyles.fieldGroup}>
            <Text style={addStyles.label}>Notes</Text>
            <TextInput
              style={addStyles.textArea}
              placeholder="Add any notes about this miniature..."
              placeholderTextColor="#AAA"
              multiline
              value={form.notes}
              onChangeText={(v) => setForm((p) => ({ ...p, notes: v }))}
            />
          </View>
        </View>

        <View style={addStyles.actions}>
          <TouchableOpacity
            style={addStyles.submitButton}
            onPress={handleSubmit}
            activeOpacity={0.85}
          >
            <Text style={addStyles.submitButtonIcon}>✦</Text>
            <Text style={addStyles.submitButtonText}>Add Miniature</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={addStyles.cancelButton}
            onPress={handleCancel}
            activeOpacity={0.7}
          >
            <Text style={addStyles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddScreen;
