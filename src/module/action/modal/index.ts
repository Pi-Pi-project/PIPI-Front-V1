const FORM_MODAL_ON = "modal/FORM_MODAL_ON" as const;
const FORM_MODAL_OFF = "modal/FORM_MODAL_OFF" as const;

const PORTFOLIO_EDIT_MODAL_ON = "modal/PORTFOLIO_EDIT_MODAL_ON" as const;
const PORTFOLIO_EDIT_MODAL_OFF = "modal/PORTFOLIO_EDIT_MODAL_OFF" as const;

const portfolioEditModalOn = () => ({
  type: PORTFOLIO_EDIT_MODAL_ON
});

const portfolioEditModalOff = () => ({
  type: PORTFOLIO_EDIT_MODAL_OFF
});

const formModalOn = (payload: { title: string; subTitle: string }) => ({
  type: FORM_MODAL_ON,
  payload
});

const formModalOff = () => ({
  type: FORM_MODAL_OFF
});

type modalActionType =
  | ReturnType<typeof formModalOff>
  | ReturnType<typeof formModalOn>
  | ReturnType<typeof portfolioEditModalOn>
  | ReturnType<typeof portfolioEditModalOff>;

export const modalAction = {
  FORM_MODAL_ON,
  FORM_MODAL_OFF,
  PORTFOLIO_EDIT_MODAL_ON,
  PORTFOLIO_EDIT_MODAL_OFF
};

export const modalActionCreater = {
  formModalOn,
  formModalOff,
  portfolioEditModalOn,
  portfolioEditModalOff
};

export default modalActionType;
