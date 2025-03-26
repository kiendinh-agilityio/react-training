import { useState } from 'react';

// Import react router dom
import { useNavigate } from 'react-router-dom';

// Import react hook form
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

// Import lib radix
import { Flex } from '@radix-ui/themes';

// Import common components
import { Input, Button, Text, Link } from '@/components/common';

// Import common icons
import {
  ShowPasswordIcon,
  HidePasswordIcon,
  LoadingIcon,
} from '@/components/common/Icons';

// Import stores
import { useAuthStore } from '@/stores';

// Import constants
import { REGEX, MESSAGE_ERROR } from '@/constants';

interface AuthFormInputs {
  name?: string;
  email: string;
  password: string;
}

interface AuthFormProps {
  type: 'signin' | 'signup';
  onSubmit: SubmitHandler<AuthFormInputs>;
  bottomText: string;
  bottomLink: string;
  bottomLinkText: string;
}

const AuthForm = ({
  type,
  onSubmit,
  bottomText,
  bottomLink,
  bottomLinkText,
}: AuthFormProps) => {
  const { showPassword, togglePasswordVisibility, setName, setEmail, setPassword } =
    useAuthStore();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormInputs>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  // Handle Form Submit
  const handleFormSubmit: SubmitHandler<AuthFormInputs> = async (data) => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      if (type === 'signup') {
        setName(data.name || '');
        setEmail(data.email);
        setPassword(data.password);
      }

      await onSubmit(data);

      setTimeout(() => {
        navigate('/home');
      }, 1500);
    } catch (error) {
      setIsLoading(false);

      setErrorMessage(
        type === 'signin' ? MESSAGE_ERROR.INVALID_SIGNIN : MESSAGE_ERROR.SIGNUP_FAILED,
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col max-w-[350px]"
    >
      {type === 'signup' && (
        <Flex direction="column" className="mb-6 gap-[5px]">
          <Text>Name</Text>
          <Controller
            name="name"
            control={control}
            rules={{
              required: MESSAGE_ERROR.REQUIRED_ERROR('Name'),
              pattern: {
                value: REGEX.NAME,
                message: MESSAGE_ERROR.INVALID_NAME,
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Your full name"
                type="text"
                errorMessage={errors.name?.message}
              />
            )}
          />
        </Flex>
      )}

      <Flex direction="column" className="mb-6 gap-[5px]">
        <Text>Email</Text>
        <Controller
          name="email"
          control={control}
          rules={{
            required: MESSAGE_ERROR.REQUIRED_ERROR('Email'),
            pattern: {
              value: REGEX.EMAIL,
              message: MESSAGE_ERROR.INVALID_EMAIL,
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Your email address"
              type="email"
              errorMessage={errors.email?.message}
            />
          )}
        />
      </Flex>

      <Flex direction="column" className="gap-[5px]">
        <Text>Password</Text>
        <Controller
          name="password"
          control={control}
          rules={{
            required: MESSAGE_ERROR.REQUIRED_ERROR('Password'),
            pattern: {
              value: REGEX.PASSWORD,
              message: MESSAGE_ERROR.INVALID_PASSWORD,
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Your password"
              type={showPassword ? 'text' : 'password'}
              errorMessage={errors.password?.message}
              rightIcon={
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <ShowPasswordIcon /> : <HidePasswordIcon />}
                </button>
              }
            />
          )}
        />
      </Flex>

      {errorMessage && !errors.password && (
        <Text className="text-danger mt-3 text-sm">{errorMessage}</Text>
      )}

      <Button
        onClick={handleSubmit(handleFormSubmit)}
        className="mt-9 w-[350px]"
        isDisabled={isLoading}
      >
        {isLoading ? <LoadingIcon /> : type === 'signin' ? 'Sign In' : 'Sign Up'}
      </Button>
      <Text as="div" className="font-regular text-base text-center mt-[22px]">
        {bottomText}{' '}
        <Link href={bottomLink} className="text-primary">
          {bottomLinkText}
        </Link>
      </Text>
    </form>
  );
};

export default AuthForm;
