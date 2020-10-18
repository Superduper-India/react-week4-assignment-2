import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputReservation from '../components/InputReservation';
import {
  updateReservationName,
  updateReservationCategory,
  updateReservationAddress,
  addReservation,
} from '../modules/actions';

export default function InputReservationContainer() {
  const { reservation } = useSelector((state) => ({
    reservation: state.reservation,
  }));

  const dispatch = useDispatch();

  function handleChangeReservationName(event) {
    dispatch(updateReservationName(event.target.value));
  }

  function handleChangeReservationCategory(event) {
    dispatch(updateReservationCategory(event.target.value));
  }

  function handleChangeReservationAddress(event) {
    dispatch(updateReservationAddress(event.target.value));
  }

  function handleClick() {
    dispatch(addReservation());
  }

  return (
    <InputReservation
      values={reservation}
      onChangeName={handleChangeReservationName}
      onChangeCategory={handleChangeReservationCategory}
      onChangeAddress={handleChangeReservationAddress}
      onClick={handleClick}
    />
  );
}
