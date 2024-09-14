import React from 'react';
import {Input, InputField} from '@gluestack-ui/themed';

interface Props {
  placeHolder?: string;
}

export default function UIInput({placeHolder}: Props) {
  return (
    <Input variant="outline" size="lg" mx={15} borderRadius={10}>
      <InputField placeholder={placeHolder} />
    </Input>
  );
}
