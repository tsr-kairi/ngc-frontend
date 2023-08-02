/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable no-plusplus */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { createStyles, Text } from '@mantine/core';
import { useFocusWithin } from '@mantine/hooks';
import { IconAlertCircle } from '@tabler/icons-react';
import React, { useMemo } from 'react';

interface IOtpInputProps {
  value: string;
  valueLength: number;
  onChange: (value: string) => void;
  otpError: boolean;
  errorMessage: string;
  showNumber?: boolean;
}

export const RE_DIGIT = /^\d+$/;

const useStyles = createStyles((theme) => ({
  otpGroup: {
    display: 'flex',
    margin: '0 auto',
    width: '80%',
    maxWidth: 300,
    columnGap: 5,
  },

  otpInput: {
    width: '100%',
    height: '50px',
    border: `1px solid ${theme.colors.dark[3]} `,
    backgroundColor: 'transparent',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.dark[8],
    borderRadius: '5px',
    padding: 0,
    textAlign: 'center',
    fontSize: '32px',
    fontWeight: 500,
    lineHeight: 1,
    outline: 'none',
  },
}));

export default function OtpInput({
  value,
  valueLength,
  onChange,
  otpError,
  errorMessage,
  showNumber,
}: IOtpInputProps) {
  const { classes } = useStyles();

  const { ref } = useFocusWithin();

  const valueItems = useMemo(() => {
    const valueArray = value.split('');
    const items: Array<string> = [];

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];

      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push('');
      }
    }

    return items;
  }, [value, valueLength]);

  const focusToNextInput = (target: HTMLElement) => {
    const nextElementSibling =
      target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };
  const focusToPrevInput = (target: HTMLElement) => {
    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };
  const inputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const { target } = e;
    let targetValue = target.value.trim();
    const isTargetValueDigit = RE_DIGIT.test(targetValue);

    if (!isTargetValueDigit && targetValue !== '') {
      return;
    }

    if (targetValue.length === 4) {
      console.log('hit');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      ref.current?.focus();
    }

    targetValue = isTargetValueDigit ? targetValue : ' ';

    const targetValueLength = targetValue.length;

    if (targetValueLength === 1) {
      const newValue =
        value.substring(0, idx) + targetValue + value.substring(idx + 1);

      onChange(newValue);

      if (!isTargetValueDigit) {
        return;
      }

      focusToNextInput(target);
    } else if (targetValueLength === valueLength) {
      onChange(targetValue);

      target.blur();
    }
  };
  // eslint-disable-next-line consistent-return
  const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const target = e.target as HTMLInputElement;

    if (key === 'ArrowRight' || key === 'ArrowDown') {
      e.preventDefault();
      return focusToNextInput(target);
    }

    if (key === 'ArrowLeft' || key === 'ArrowUp') {
      e.preventDefault();
      return focusToPrevInput(target);
    }

    const targetValue = target.value;

    // keep the selection range position
    // if the same digit was typed
    target.setSelectionRange(0, targetValue.length);

    if (e.key !== 'Backspace' || targetValue !== '') {
      // eslint-disable-next-line consistent-return
      return;
    }

    focusToPrevInput(target);
  };
  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e;

    target.setSelectionRange(0, target.value.length);
  };

  return (
    <>
      <div className={classes.otpGroup}>
        {valueItems.map((digit, idx) => (
          <input
            key={idx}
            placeholder={(idx + 1).toString()}
            autoFocus={idx === 0}
            type={showNumber ? 'text' : 'password'}
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern="\d{1}"
            maxLength={valueLength}
            value={digit}
            onChange={(e) => inputOnChange(e, idx)}
            onKeyDown={inputOnKeyDown}
            onFocus={inputOnFocus}
            className={classes.otpInput}
            ref={ref}
            {...(otpError && {
              style: {
                border: '1px solid #fa5252',
              },
            })}
          />
        ))}
      </div>
      {otpError ? (
        <Text
          sx={(theme) => ({
            color: theme.colors.red[6],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.25rem',
          })}
          size="xs"
          mt={4}
        >
          <IconAlertCircle size={14} /> <div>{errorMessage}</div>
        </Text>
      ) : (
        <Text
          size="xs"
          mt={4}
          sx={{
            color: 'transparent',
          }}
        >
          Null
        </Text>
      )}
    </>
  );
}
