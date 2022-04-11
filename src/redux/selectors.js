const profilesSelector = (state) => state.profiles.profiles;
const errorsSelector = (state) => state.profiles.errors;
const isLoadingSelector = (state) => state.profiles.isLoading;
const isModalVisibleSelector = (state) => state.modal.isModalVisible;

export {
  profilesSelector,
  errorsSelector,
  isLoadingSelector,
  isModalVisibleSelector,
};
