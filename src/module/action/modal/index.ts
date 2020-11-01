const FORM_MODAL_ON = "modal/FORM_MODAL_ON" as const;
const FORM_MODAL_OFF = "modal/FORM_MODAL_OFF" as const;

const formModalOn = (payload: { title: string; subTitle: string }) => ({
  type: FORM_MODAL_ON,
  payload
});

const formModalOff = () => ({
  type: FORM_MODAL_OFF
});

type modalActionType =
  | ReturnType<typeof formModalOff>
  | ReturnType<typeof formModalOn>;

export const modalAction = {
  FORM_MODAL_ON,
  FORM_MODAL_OFF
};

export const modalActionCreater = {
  formModalOn,
  formModalOff
};

export default modalActionType;
