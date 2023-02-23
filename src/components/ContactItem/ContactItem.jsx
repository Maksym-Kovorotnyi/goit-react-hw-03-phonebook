import PropTypes from 'prop-types';
import css from './ContactItem.module.css'

export const ContactItem = ({ id, name, number, onClick }) => (
    <>
        <li className={css.item} key={id}>
            <p className={css.text}>{name}: {number}</p>
            <button className={css.btn} type="button" onClick={()=>onClick(id)}>Delete</button>
        </li>
    </>
)

ContactItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};