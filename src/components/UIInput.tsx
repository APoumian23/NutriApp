import React from 'react';
import {Input, InputField} from '@gluestack-ui/themed';

interface Props {
  placeHolder?: string;
  keyboardType?: 'default' | 'numeric';
  onChangeText: ((text: string) => void) | undefined;
  value: string;
}

export default function UIInput({
  placeHolder,
  keyboardType,
  onChangeText,
  value,
}: Props) {
  return (
    <Input variant="outline" size="lg" borderRadius={10}>
      <InputField
        placeholder={placeHolder}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
      />
    </Input>
  );
}
