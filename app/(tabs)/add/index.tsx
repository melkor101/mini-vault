import { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { addStyles } from '@/styles/tabs/add.styles';
import { addMiniature } from '@/database/miniature-actions';
import { PaintStatusEnum } from '@/database/models/miniature.model';
import {
  BRAND_OPTIONS,
  PAINT_STATUS_OPTIONS,
  STORAGE_BOX_OPTIONS,
  TYPE_OPTIONS,
} from '@/constants/miniature-options';

type FormState = {
  name: string;
  manufacturer: string;
  type: string;
  paintStatus: PaintStatusEnum;
  storageBox: string;
  notes: string;
};

const AddScreen = () => {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({
    name: '',
    manufacturer: '',
    type: '',
    paintStatus: PaintStatusEnum.Backlog,
    storageBox: '',
    notes: '',
  });
  const [openDropdown, setOpenDropdown] = useState<'manufacturer' | 'type' | 'paintStatus' | 'storageBox' | null>(null);

  const toggleDropdown = (key: 'manufacturer' | 'type' | 'paintStatus' | 'storageBox') => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const selectOption = (key: 'manufacturer' | 'type' | 'storageBox', value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setOpenDropdown(null);
  };

  const selectPaintStatusEnum = (value: PaintStatusEnum) => {
    setForm((prev) => ({ ...prev, paintStatus: value }));
    setOpenDropdown(null);
  };

  const handleSubmit = async () => {
    if (!form.name.trim()) return;
    await addMiniature({
      name: form.name,
      brand: form.manufacturer,
      type: form.type,
      status: form.paintStatus,
      storageBox: form.storageBox,
    });
    router.back();
  };

  const handleCancel = () => {
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
            <TouchableOpacity
              style={addStyles.pickerButton}
              onPress={() => toggleDropdown('manufacturer')}
              activeOpacity={0.7}
            >
              <Text style={[addStyles.pickerButtonText, !form.manufacturer && { color: '#AAA' }]}>
                {form.manufacturer || 'Select a manufacturer'}
              </Text>
              <Text style={addStyles.pickerChevron}>
                {openDropdown === 'manufacturer' ? '▲' : '▾'}
              </Text>
            </TouchableOpacity>
            {openDropdown === 'manufacturer' && (
              <View style={addStyles.dropdown}>
                {BRAND_OPTIONS.map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={[
                      addStyles.dropdownItem,
                      form.manufacturer === option && addStyles.dropdownItemSelected,
                    ]}
                    onPress={() => selectOption('manufacturer', option)}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        addStyles.dropdownItemText,
                        form.manufacturer === option && addStyles.dropdownItemTextSelected,
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
            <Text style={addStyles.label}>Type</Text>
            <TouchableOpacity
              style={addStyles.pickerButton}
              onPress={() => toggleDropdown('type')}
              activeOpacity={0.7}
            >
              <Text style={[addStyles.pickerButtonText, !form.type && { color: '#AAA' }]}>
                {form.type || 'Select a type'}
              </Text>
              <Text style={addStyles.pickerChevron}>
                {openDropdown === 'type' ? '▲' : '▾'}
              </Text>
            </TouchableOpacity>
            {openDropdown === 'type' && (
              <View style={addStyles.dropdown}>
                {TYPE_OPTIONS.map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={[
                      addStyles.dropdownItem,
                      form.type === option && addStyles.dropdownItemSelected,
                    ]}
                    onPress={() => selectOption('type', option)}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        addStyles.dropdownItemText,
                        form.type === option && addStyles.dropdownItemTextSelected,
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
            <Text style={addStyles.label}>Paint Status</Text>
            <TouchableOpacity
              style={addStyles.pickerButton}
              onPress={() => toggleDropdown('paintStatus')}
              activeOpacity={0.7}
            >
              <Text style={addStyles.pickerButtonText}>
                {PAINT_STATUS_OPTIONS.find((o) => o.value === form.paintStatus)?.label}
              </Text>
              <Text style={addStyles.pickerChevron}>
                {openDropdown === 'paintStatus' ? '▲' : '▾'}
              </Text>
            </TouchableOpacity>
            {openDropdown === 'paintStatus' && (
              <View style={addStyles.dropdown}>
                {PAINT_STATUS_OPTIONS.map((option) => (
                  <TouchableOpacity
                    key={option.value}
                    style={[
                      addStyles.dropdownItem,
                      form.paintStatus === option.value && addStyles.dropdownItemSelected,
                    ]}
                    onPress={() => selectPaintStatusEnum(option.value)}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        addStyles.dropdownItemText,
                        form.paintStatus === option.value && addStyles.dropdownItemTextSelected,
                      ]}
                    >
                      {option.label}
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
            <Text style={addStyles.submitButtonIcon}>+</Text>
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
