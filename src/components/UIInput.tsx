import {View, Text} from 'react-native';
import React from 'react';
import {Input, InputField} from '@gluestack-ui/themed';

interface Props {
  placeHolder?: string;
  keyBoardType?: any;
}

export default function UIInput({placeHolder, keyBoardType}: Props) {
  return (
    <Input variant="outline" size="lg" mx={15} borderRadius={10}>
      <InputField placeholder={placeHolder} keyboardType={keyBoardType} />
    </Input>
  );
}
