/**
 *
 * FormModalEndActions
 *
 */

import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Button } from '@strapi/parts/Button';
import AddIcon from '@strapi/icons/AddIcon';
import { getTrad } from '../../utils';

const FormModalEndActions = ({
  categoryName,
  deleteCategory,
  deleteComponent,
  deleteContentType,
  isAttributeModal,
  isComponentAttribute,
  isComponentToDzModal,
  isContentTypeModal,
  isCreatingComponent,
  isCreatingComponentAttribute,
  isCreatingComponentInDz,
  isCreatingComponentWhileAddingAField,
  isCreatingContentType,
  isCreatingDz,
  isComponentModal,
  isDzAttribute,
  isEditingAttribute,
  isEditingCategory,
  isInFirstComponentStep,
  onSubmitAddComponentAttribute,
  onSubmitAddComponentToDz,
  onSubmitCreateContentType,
  onSubmitCreateComponent,
  onSubmitCreateDz,
  onSubmitEditAttribute,
  onSubmitEditCategory,
  onSubmitEditComponent,
  onSubmitEditContentType,
  onSubmitEditDz,
}) => {
  const { formatMessage } = useIntl();

  if (isComponentToDzModal) {
    console.log('is component to dz modal');

    if (isCreatingComponentInDz) {
      return (
        <Button
          variant="secondary"
          type="submit"
          onClick={e => {
            e.preventDefault();

            onSubmitAddComponentToDz(e, true);
          }}
          startIcon={<AddIcon />}
        >
          {formatMessage({
            id: getTrad('form.button.add-first-field-to-created-component'),
            defaultMessage: 'Add first field to the component',
          })}
        </Button>
      );
    }

    return (
      <Button
        variant="default"
        type="submit"
        onClick={e => {
          e.preventDefault();

          onSubmitAddComponentToDz(e, false);
        }}
      >
        {formatMessage({
          id: getTrad('form.button.finish'),
          defaultMessage: 'Finish',
        })}
      </Button>
    );
  }

  if (isAttributeModal && isDzAttribute && !isCreatingDz) {
    console.log('is dz attribute modal, editing');

    return (
      <Button
        variant="default"
        type="submit"
        onClick={e => {
          e.preventDefault();

          onSubmitEditDz(e, false);
        }}
      >
        {formatMessage({
          id: getTrad('form.button.finish'),
          defaultMessage: 'Finish',
        })}
      </Button>
    );
  }

  if (isAttributeModal && isDzAttribute && isCreatingDz) {
    console.log('is dz attribute modal, creating');

    return (
      <>
        <Button
          variant="secondary"
          type="submit"
          onClick={e => {
            e.preventDefault();

            onSubmitCreateDz(e, true);
          }}
          startIcon={<AddIcon />}
        >
          {formatMessage({
            id: getTrad('form.button.add-components-to-dynamiczone'),
            defaultMessage: 'Add components to the zone',
          })}
        </Button>
        {/* // TO FIX fix doesnt close the modal */}
        {/* <Button
          variant="default"
          type="button"
          onClick={e => {
            e.preventDefault();

            onSubmitCreateDz(e, false);
          }}
        >
          {formatMessage({
            id: getTrad('form.button.finish'),
            defaultMessage: 'Finish',
          })}
        </Button> */}
      </>
    );
  }

  if (isAttributeModal && isComponentAttribute) {
    console.log('is component attribute');

    if (isInFirstComponentStep) {
      return (
        <Button
          variant="secondary"
          type="submit"
          onClick={e => {
            e.preventDefault();

            onSubmitAddComponentAttribute(e, true);
          }}
        >
          {isCreatingComponentAttribute
            ? formatMessage({
                id: getTrad('form.button.configure-component'),
                defaultMessage: 'Configure the component',
              })
            : formatMessage({
                id: getTrad('form.button.select-component'),
                defaultMessage: 'Configure the component',
              })}
        </Button>
      );
    }

    return (
      <>
        <Button
          variant="secondary"
          type="submit"
          onClick={e => {
            e.preventDefault();

            onSubmitAddComponentAttribute(e, true);
          }}
          startIcon={<AddIcon />}
        >
          {isCreatingComponentWhileAddingAField
            ? formatMessage({
                id: getTrad('form.button.add-first-field-to-created-component'),
                defaultMessage: 'Add first field to the component',
              })
            : formatMessage({
                id: getTrad('form.button.add-field'),
                defaultMessage: 'Add another field',
              })}
        </Button>
        <Button
          variant="default"
          type="button"
          onClick={e => {
            e.preventDefault();

            onSubmitAddComponentAttribute(e, false);
          }}
        >
          {formatMessage({
            id: getTrad('form.button.finish'),
            defaultMessage: 'Finish',
          })}
        </Button>
      </>
    );
  }

  if (isAttributeModal && !isComponentAttribute && !isDzAttribute) {
    console.log('is attribute modal');

    return (
      <>
        <Button
          type={isEditingAttribute ? 'button' : 'submit'}
          variant="secondary"
          onClick={e => {
            e.preventDefault();

            onSubmitEditAttribute(e, true);
          }}
          startIcon={<AddIcon />}
        >
          {formatMessage({
            id: getTrad('form.button.add-field'),
            defaultMessage: 'Add another field',
          })}
        </Button>
        <Button
          type={isEditingAttribute ? 'submit' : 'button'}
          variant="default"
          onClick={e => {
            e.preventDefault();

            onSubmitEditAttribute(e, false);
          }}
        >
          {formatMessage({
            id: getTrad('form.button.finish'),
            defaultMessage: 'Finish',
          })}
        </Button>
      </>
    );
  }

  if (isContentTypeModal) {
    console.log('is contentType modal');

    return (
      <>
        {!isCreatingContentType && (
          <>
            <Button
              type="button"
              variant="danger"
              onClick={e => {
                e.preventDefault();
                deleteContentType();
              }}
            >
              {formatMessage({
                id: getTrad('form.button.delete'),
                defaultMessage: 'Delete',
              })}
            </Button>
            <Button
              type="submit"
              variant="default"
              onClick={e => {
                e.preventDefault();

                onSubmitEditContentType(e, false);
              }}
            >
              {formatMessage({
                id: getTrad('form.button.finish'),
                defaultMessage: 'Finish',
              })}
            </Button>
          </>
        )}
        {isCreatingContentType && (
          <Button
            type="submit"
            variant="secondary"
            onClick={e => {
              e.preventDefault();

              onSubmitCreateContentType(e, true);
            }}
          >
            {formatMessage({
              id: getTrad('form.button.continue'),
              defaultMessage: 'Continue',
            })}
          </Button>
        )}
      </>
    );
  }

  if (isComponentModal) {
    console.log('is component modal');

    return (
      <>
        {!isCreatingComponent && (
          <>
            <Button
              type="button"
              variant="danger"
              onClick={e => {
                e.preventDefault();
                deleteComponent();
              }}
            >
              {formatMessage({
                id: getTrad('form.button.delete'),
                defaultMessage: 'Delete',
              })}
            </Button>
            <Button
              type="submit"
              variant="default"
              onClick={e => {
                e.preventDefault();

                onSubmitEditComponent(e, false);
              }}
            >
              {formatMessage({
                id: getTrad('form.button.finish'),
                defaultMessage: 'Finish',
              })}
            </Button>
          </>
        )}
        {isCreatingComponent && (
          <Button
            type="submit"
            variant="secondary"
            onClick={e => {
              e.preventDefault();

              onSubmitCreateComponent(e, true);
            }}
          >
            {formatMessage({
              id: getTrad('form.button.continue'),
              defaultMessage: 'Continue',
            })}
          </Button>
        )}
      </>
    );
  }

  if (isEditingCategory) {
    console.log('is editing category');

    return (
      <>
        <Button
          type="button"
          variant="danger"
          onClick={e => {
            e.preventDefault();

            deleteCategory(categoryName);
          }}
        >
          {formatMessage({
            id: getTrad('form.button.delete'),
            defaultMessage: 'Delete',
          })}
        </Button>
        <Button
          type="submit"
          variant="default"
          onClick={e => {
            e.preventDefault();

            onSubmitEditCategory(e);
          }}
        >
          {formatMessage({
            id: getTrad('form.button.finish'),
            defaultMessage: 'finish',
          })}
        </Button>
      </>
    );
  }

  return (
    <div>
      <p>
        {formatMessage({ id: getTrad('component.name'), defaultMessage: 'Form Modal End Actions' })}
      </p>
    </div>
  );
};

FormModalEndActions.defaultProps = {
  categoryName: null,
};

FormModalEndActions.propTypes = {
  categoryName: PropTypes.string,
  deleteCategory: PropTypes.func.isRequired,
  deleteComponent: PropTypes.func.isRequired,
  deleteContentType: PropTypes.func.isRequired,
  isAttributeModal: PropTypes.bool.isRequired,
  isComponentAttribute: PropTypes.bool.isRequired,
  isComponentModal: PropTypes.bool.isRequired,
  isComponentToDzModal: PropTypes.bool.isRequired,
  isContentTypeModal: PropTypes.bool.isRequired,
  isCreatingComponent: PropTypes.bool.isRequired,
  isCreatingComponentAttribute: PropTypes.bool.isRequired,
  isCreatingComponentInDz: PropTypes.bool.isRequired,
  isCreatingComponentWhileAddingAField: PropTypes.bool.isRequired,
  isCreatingContentType: PropTypes.bool.isRequired,
  isCreatingDz: PropTypes.bool.isRequired,
  isDzAttribute: PropTypes.bool.isRequired,
  isEditingAttribute: PropTypes.bool.isRequired,
  isEditingCategory: PropTypes.bool.isRequired,
  isInFirstComponentStep: PropTypes.bool.isRequired,
  onSubmitAddComponentAttribute: PropTypes.func.isRequired,
  onSubmitAddComponentToDz: PropTypes.func.isRequired,
  onSubmitCreateContentType: PropTypes.func.isRequired,
  onSubmitCreateComponent: PropTypes.func.isRequired,
  onSubmitCreateDz: PropTypes.func.isRequired,
  onSubmitEditAttribute: PropTypes.func.isRequired,
  onSubmitEditCategory: PropTypes.func.isRequired,
  onSubmitEditComponent: PropTypes.func.isRequired,
  onSubmitEditContentType: PropTypes.func.isRequired,
  onSubmitEditDz: PropTypes.func.isRequired,
};

export default FormModalEndActions;
