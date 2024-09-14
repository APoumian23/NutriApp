import React from 'react';
import {Input, InputField} from '@gluestack-ui/themed';

interface Props {
  placeHolder?: string;
  keyboardType?: 'default' | 'numeric';
  onChangeTexte: ((text: string) => void) | undefined;
  value: string;
}

export default function UIInput({
  placeHolder,
  keyboardType,
  onChangeTexte,
  value,
}: Props) {
  return (
    <Input variant="outline" size="lg" mx={15} borderRadius={10}>
      <InputField
        placeholder={placeHolder}
        keyboardType={keyboardType}
        onChangeText={onChangeTexte}
        value={value}
      />
    </Input>
  );
}
