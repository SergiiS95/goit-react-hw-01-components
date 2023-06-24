import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
 
  function getBgColor(isOnline) {
    if (isOnline) {
    return "green"
    }
    else {
      return "red"
    }
}

  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{ backgroundColor: getBgColor(isOnline) }}
      >
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
