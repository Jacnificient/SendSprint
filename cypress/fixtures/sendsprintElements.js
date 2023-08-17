export const Loginpage={
    username: "[name='email']",
    password: "[name='password']",
    dashboardHeader: ".ss-mb-2",
}

export const Transferpage={
    sendmoneyBtn: ".ss-button--primary > .ss-button__content > .ss-button__content-inner > .ss-button__label",
    sendamount: "[name='sendAmount']",
    receiverCurrency: "#headlessui-listbox-button-15",
    naiaraCurrency: ".ss-text-paragraph-regular",
    beneficiaryOption: ".ss-bg-white > :nth-child(1) > .ss-justify-between",
    paymentOption: ".ss-space-y-2 > :nth-child(3)",
    payBtn: ".ss-pt-4 > .ss-button",
    transactionPin: "form > .ss-bg-white > .ss-flex > :nth-child(1)",
    confirmPay: ".ss-space-y-3 > .ss-button > .ss-button__content > .ss-button__content-inner",
    closeModal: ".ss-h-full > .ss-justify-between > .ss-button > .ss-button__content > .ss-button__content-inner > .ss-button__label"
}

export const Navigation={
    menuBtn: ".ss-gap-2 > .ss-w-12",
    transactionsMenu: ".ss-space-y-2 > [href='/transfers'] > .ss-text-paragraph-regular",
    recipientsMenu: ".ss-space-y-2 > [href='/recipients'] > .ss-text-paragraph-regular",
    accountBtn: "#headlessui-menu-button-13",
    logoutBtn: ".ss-text-paragraph-regular",
    sendmoneyMenu: ".ss-space-y-2 > [href='/send'] > .ss-text-paragraph-regular"
}
