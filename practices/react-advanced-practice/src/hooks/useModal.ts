import { useState, useCallback } from 'react';

// Import types
import { Author } from '@/types';

// Import utils
import { profileAuthor } from '@/utils';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [selectedAuthor, setSelectedAuthor] = useState<Author>(profileAuthor);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);

  const handleShowAddModal = useCallback(() => {
    setIsUpdate(false);
    setSelectedAuthor(profileAuthor);
    setIsModalOpen(true);
  }, []);

  const handleShowEditModal = useCallback((author: Author) => {
    setIsUpdate(true);
    setSelectedAuthor(author);
    setIsModalOpen(true);
  }, []);

  const handleShowConfirmModal = useCallback((authorId: string) => {
    setSelectedAuthor((prev) => ({ ...prev, id: authorId }));
    setIsConfirmModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setIsConfirmModalOpen(false);
  }, []);

  return {
    isModalOpen,
    setIsModalOpen,
    isUpdate,
    isConfirmModalOpen,
    setIsConfirmModalOpen,
    selectedAuthor,
    setSelectedAuthor,
    handleShowAddModal,
    handleShowEditModal,
    handleShowConfirmModal,
    handleCloseModal,
  };
};
