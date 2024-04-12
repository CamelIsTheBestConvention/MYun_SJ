import React, { useState } from 'react';
import "../../style/common/dropdown.scss"

const Dropdown = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <div className='dropdown-box'>
            <label htmlFor="category"></label>
            <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">카테고리를 선택하세요</option>
                <option value="technology">크래프톤 정글</option>
                <option value="lifestyle">프론트 엔드</option>
                <option value="food">백 엔드</option>
                <option value="travel">MYUN</option>
            </select>
        </div>
    );
};

export default Dropdown;
