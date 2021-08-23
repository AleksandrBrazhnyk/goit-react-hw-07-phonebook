import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { motion, AnimatePresence } from 'framer-motion';
import { variants } from '../../utils/motionVar';
import ErrorView from '../ErrorView';
import { ReactComponent as DeleteIcon } from '../../img/delete.svg';
import style from './ContactList.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);
  const contacts = useSelector(contactsSelectors.getContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);
  const error = useSelector(contactsSelectors.getError);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <>
      {contacts.length > 0 && !error && (
        <motion.ul className={style.list}>
          <AnimatePresence>
            {visibleContacts.map(({ id, name, number }) => (
              <motion.li
                className={style.item}
                key={id}
                initial="initial"
                animate="animate"
                exit="exit"
                transition="transition"
                variants={variants}
              >
                <p className={style.info}>
                  <b>{name}</b>
                  <em>{number}</em>
                </p>
                <button
                  className={style.btn}
                  type="button"
                  onClick={() => dispatch(contactsOperations.deleteContact(id))}
                >
                  <DeleteIcon width="26" height="26" />
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}

      {!contacts.length && !error && !isLoading && (
        <AnimatePresence>
          <motion.p
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            variants={variants}
          >
            Your phonebook is empty. Please add contact.
          </motion.p>
        </AnimatePresence>
      )}

      {error && <ErrorView message={error.message} />}
    </>
  );
}

export default ContactList;