import PropTypes from 'prop-types'
import { useState } from 'react'

function RatingSelect({ select }) {
    const [selected, setSelected] = useState(5)
    const handleChange = (e) => {
        let value = +e.currentTarget.value;
        // console.log("🚀 ~ file: RatingSelect.jsx ~ line 8 ~ handleChange ~ value", typeof parseFloat(value))
        setSelected(value)
        select(value)
    }   

    return (
        <div>
            <ul className="rating">
                <li>
                    <input type="radio" name="rating" id="num1" onChange={handleChange} checked={selected===1} value={1} />
                    <label htmlFor="num1">1</label>
                </li>
                <li>
                    <input type="radio" name="rating" id="num2" onChange={handleChange} checked={selected===2} value={2} />
                    <label htmlFor="num2">2</label>
                </li>
                <li>
                    <input type="radio" name="rating" id="num3" onChange={handleChange} checked={selected===3} value={3} />
                    <label htmlFor="num3">3</label>
                </li>
                <li>
                    <input type="radio" name="rating" id="num4" onChange={handleChange} checked={selected===4} value={4} />
                    <label htmlFor="num4">4</label>
                </li>
                <li>
                    <input type="radio" name="rating" id="num5" onChange={handleChange} checked={selected===5} value={5} />
                    <label htmlFor="num5">5</label>
                </li>
            </ul>
        </div>
    )
}
RatingSelect.propTypes = {}
export default RatingSelect