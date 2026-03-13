import { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { addStyles } from '@/styles/tabs/add.styles';
import { addMiniature } from '@/database/miniature-actions';
import { PaintStatusEnum } from '@/database/models/miniature.model';
import {
  BRAND_OPTIONS,
  PAINT_STATUS_OPTIONS,
  STORAGE_BOX_OPTIONS,
  TYPE_OPTIONS,
} from '@/constants/miniature-options';
import { AppColors } from '@/constants/theme';
import { FormDropdown } from '@/components/form-dropdown/form-dropdown';
import { FormField } from '@/components/form-field/form-field';
import { CameraIcon } from '@/assets/icons/camera';

enum DropdownField {
  Brand = 'brand',
  Type = 'type',
  Status = 'status',
  StorageBox = 'storageBox',
}

const addMiniatureSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  brand: z.string(),
  type: z.string(),
  status: z.nativeEnum(PaintStatusEnum),
  storageBox: z.string(),
  notes: z.string(),
});

type AddMiniatureForm = z.infer<typeof addMiniatureSchema>;

const toOptions = (values: string[]) => values.map((v) => ({ value: v, label: v }));

const addMiniatureDefaultValues: AddMiniatureForm = {
  name: '',
  brand: '',
  type: 'Infantry',
  status: PaintStatusEnum.Backlog,
  storageBox: '',
  notes: '',
};

const AddScreen = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddMiniatureForm>({
    resolver: zodResolver(addMiniatureSchema),
    defaultValues: addMiniatureDefaultValues,
  });
  const [openDropdown, setOpenDropdown] = useState<DropdownField | null>(null);

  const toggleDropdown = (key: DropdownField) =>
    setOpenDropdown((prev) => (prev === key ? null : key));

  const makeDropdownOnChange = (onChange: (v: string) => void) => (v: string) => {
    onChange(v);
    setOpenDropdown(null);
  };

  const onSubmit = async (data: AddMiniatureForm) => {
    await addMiniature(data);
    router.back();
  };

  return (
    <SafeAreaView style={addStyles.screen} edges={['top']}>
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
            <CameraIcon size={64} />
          </View>
          <Text style={addStyles.heroTitle}>Add Miniature</Text>
          <Text style={addStyles.heroSubtitle}>Add a new model to your collection</Text>
        </View>

        <View style={addStyles.formCard}>
          <FormField label="Name *" error={errors.name?.message}>
            <Controller
              control={control}
              name="name"
              render={({ field: { value, onChange } }) => (
                <TextInput
                  style={addStyles.input}
                  placeholder="e.g., Space Marine Captain"
                  placeholderTextColor={AppColors.textMuted}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </FormField>

          <FormField label="Manufacturer">
            <Controller
              control={control}
              name="brand"
              render={({ field: { value, onChange } }) => (
                <FormDropdown
                  options={toOptions(BRAND_OPTIONS)}
                  value={value}
                  onChange={makeDropdownOnChange(onChange)}
                  placeholder="Select a manufacturer"
                  isOpen={openDropdown === DropdownField.Brand}
                  onToggle={() => toggleDropdown(DropdownField.Brand)}
                />
              )}
            />
          </FormField>

          <FormField label="Type">
            <Controller
              control={control}
              name="type"
              render={({ field: { value, onChange } }) => (
                <FormDropdown
                  options={toOptions(TYPE_OPTIONS)}
                  value={value}
                  onChange={makeDropdownOnChange(onChange)}
                  placeholder="Select a type"
                  isOpen={openDropdown === DropdownField.Type}
                  onToggle={() => toggleDropdown(DropdownField.Type)}
                />
              )}
            />
          </FormField>

          <FormField label="Paint Status">
            <Controller
              control={control}
              name="status"
              render={({ field: { value, onChange } }) => (
                <FormDropdown
                  options={PAINT_STATUS_OPTIONS}
                  value={value}
                  onChange={makeDropdownOnChange(onChange)}
                  isOpen={openDropdown === DropdownField.Status}
                  onToggle={() => toggleDropdown(DropdownField.Status)}
                />
              )}
            />
          </FormField>

          <FormField label="Storage Box">
            <Controller
              control={control}
              name="storageBox"
              render={({ field: { value, onChange } }) => (
                <FormDropdown
                  options={toOptions(STORAGE_BOX_OPTIONS)}
                  value={value}
                  onChange={makeDropdownOnChange(onChange)}
                  placeholder="Select a box"
                  isOpen={openDropdown === DropdownField.StorageBox}
                  onToggle={() => toggleDropdown(DropdownField.StorageBox)}
                />
              )}
            />
          </FormField>

          <FormField label="Notes">
            <Controller
              control={control}
              name="notes"
              render={({ field: { value, onChange } }) => (
                <TextInput
                  style={addStyles.textArea}
                  placeholder="Add any notes about this miniature..."
                  placeholderTextColor={AppColors.textMuted}
                  multiline
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </FormField>
        </View>

        <View style={addStyles.actions}>
          <TouchableOpacity
            style={addStyles.submitButton}
            onPress={handleSubmit(onSubmit)}
            activeOpacity={0.85}
          >
            <Text style={addStyles.submitButtonIcon}>+</Text>
            <Text style={addStyles.submitButtonText}>Add Miniature</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={addStyles.cancelButton}
            onPress={router.back}
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
