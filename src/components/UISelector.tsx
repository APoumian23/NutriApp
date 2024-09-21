import React from 'react';
import {
  ChevronDownIcon,
  Icon,
  Select,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectTrigger,
  SelectScrollView,
} from '@gluestack-ui/themed';
import {SelectPortal} from '@gluestack-ui/themed';
import {SelectBackdrop} from '@gluestack-ui/themed';

interface Props {
  onValueChange: (value: string) => void;
  value: string;
  items: {label: string; id: string}[];
}

export default function UISelector({onValueChange, value, items}: Props) {
  return (
    <Select onValueChange={onValueChange} borderRadius={10}>
      <SelectTrigger variant="outline" size="md">
        <SelectInput placeholder="Select option" />
        {/* @ts-ignore */}
        <SelectIcon mr="$3">
          <Icon as={ChevronDownIcon} />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          <SelectScrollView mb={'$5'}>
            {items.map((item: any, index: any) => (
              <SelectItem label={item.label} value={item.id} key={index} />
            ))}
          </SelectScrollView>
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}
