import React from 'react';
import { FaSpinner } from 'react-icons/fa';

import * as S from './styles';

interface LoadSpinnerProps {
  size: number;
}

const LoadSpinner: React.FC<LoadSpinnerProps> = ({ size }) => {
  return (
    <S.Spinner>
      <FaSpinner size={size} />
    </S.Spinner>
  );
};

export default LoadSpinner;
