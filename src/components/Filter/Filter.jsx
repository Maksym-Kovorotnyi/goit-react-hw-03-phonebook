import PropTypes from 'prop-types';
import css from './Filter.module.css'

export const Filter = ({ onFilter }) => (
    <>
        <label className={css.label} htmlFor="text">Find contact by name</label>
        <input
            className={css.input}
            onChange={onFilter}
            type="text" />
    </>
)

Filter.propTypes = {
onChange: PropTypes.func,
}