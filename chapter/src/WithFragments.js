import React, { Component, Fragment } from 'react';

class WithFragments extends Component {
    render() {
        return (
            <Fragment>
                <h1>Hướng dẫn làm mứt me ăn tết</h1>
                <h3>Chuẩn bị nguyên liệu</h3>
                <p> Me xanh ( 1 kg); Đường (0,3 kg); Muối (2 thìa) </p>
                <h3>Các bước thực hiện</h3>
                <h4>Bước 1:</h4>
                <p>Bóc vỏ, bỏ hột, rửa sạch, ngâm nước muối</p>
                <h4>Bước 2:</h4>
                <p>Ngâm đường</p>
                <h4>Bước 3:</h4>
                <p>Phơi khô</p>
            </Fragment>
        );
    }
}

export default WithFragments;