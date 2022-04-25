const profilesSelector = (state) => state.profiles.profiles;
const errorsSelector = (state) => state.profiles.errors;
const isLoadingSelector = (state) => state.profiles.isLoading;
const isModalVisibleSelector = (state) => state.modal.isModalVisible;
const isEditModalVisibleSelector = (state) => state.modal.isEditModalVisible;

export {
  profilesSelector,
  errorsSelector,
  isLoadingSelector,
  isModalVisibleSelector,
  isEditModalVisibleSelector,
};
