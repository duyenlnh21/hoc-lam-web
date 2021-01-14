// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// // hello-jsx
// import React from 'react';
// import { render } from 'react-dom';

// render(
//     <p>
//         Hello, <strong>How are you ? </strong>
//     </p>,
//     document.getElementById('root')
// );

// html-tag-conventions
// import React from 'react';
// import { render } from 'react-dom';

// render(
//   <button title="My Button" foo="bar">
//     Nhấn nút
//   </button>,
//   document.getElementById('root')
// );

// // render(<button />, document.getElementById('root'));

// // jsx-fragments

// import React from 'react';
// import { render } from 'react-dom';

// import WithoutFragments from './WithoutFragments';
// import WithFragments from './WithFragments';

// render(
//     <div>
//         <button />
//         <code />
//         <input />
//         <label />
//         <p />
//         <pre />
//         <select />
//         <table />
//         <ul />
//         <WithoutFragments />
//         <WithFragments />
//     </div>,
//     document.getElementById('root')
// );


// // describing-ui-structures

// import React from 'react';
// import { render } from 'react-dom';

// render(
//     <section>
//         <header>
//             <h1>Dịch vụ vườn</h1>
//         </header>
//         <nav>
//             <a href="item">ĐI CHỢ</a> &nbsp;
//             <a href="item">THẮM QUAN</a> &nbsp;
//             <a href="item">THANH TOÁN</a>
//         </nav>
//         <main>
//             <p>Ứng dụng công nghệ thông tin trong sản xuất nông nghiệp
// Cập nhật lúc20:10, Thứ Năm, 24/12/2020 (GMT+7)
// Trong giai đoạn hiện nay, công nghệ thông tin (CNTT) được coi là “chìa khóa” đem đến thành công cho sản xuất nông nghiệp thời kỳ 4.0. Trên địa bàn tỉnh ta ngày càng có nhiều trang trại; hộ chăn nuôi, nuôi trồng thủy hải sản ứng dụng công nghệ trong tổ chức sản xuất, quản lý trang trại. Hiệu quả ứng dụng cao nhưng còn nhiều vấn đề cần khắc phục để nhân rộng mô hình góp phần ổn định chất lượng, giảm chi phí, gia tăng giá trị trên từng sản phẩm.

// Trang trại nuôi gà quy mô công nghiệp của anh Bùi Hữu Nam, xã Mỹ Trung (Mỹ Lộc).  Bài và ảnh: Nguyễn Hương
// Trang trại nuôi gà quy mô công nghiệp của anh Bùi Hữu Nam, xã Mỹ Trung (Mỹ Lộc). 
// Một ngày làm việc của anh Trần Văn Phong, chủ trang trại thủy sản nước ngọt tại xã Giao Long (Giao Thủy) thường bắt đầu bằng việc bật điện thoại thông minh kiểm tra các thông số về lượng thức ăn, chế độ dinh dưỡng trong nước, nhiệt độ ao nuôi và thông tin dự báo thời tiết… để quyết định nhập số liệu lượng thức ăn, thời gian cho ăn đối với từng loại cá trong ao nuôi của mình. Sau bước đó, anh chỉ việc bổ sung cám vào các buồng chứa thức ăn ở các ao, mọi công đoạn còn lại từ cho ăn theo định lượng, thời điểm cho ăn, thời điểm bật quạt khí, chế độ tạo ô-xi, độ PH trong ao nuôi… đều được lập trình sẵn cho thiết bị tự động thực hiện. Với cách làm đó, trang trại nuôi cá nước ngọt của gia đình anh rộng trên 1ha nhưng chỉ cần duy nhất 1 lao động chính; anh vừa quản lý trang trại vừa có thời gian lo công việc xã hội khác. Mỗi năm trang trại thu hoạch từ 20-30 tấn cá, cao hơn trung bình những trang trại khác trong khu vực từ 5-10 tấn. Đồng thời giảm tối đa chi phí do lãng phí thức ăn, làm sạch môi trường và điều trị bệnh. Cách làm của anh Phong đang được hầu hết các trang trại trong vùng học tập, áp dụng. Anh Phong cho biết: Tôi nuôi thủy sản từ năm 2012 nhưng thời gian gần đây mới ứng dụng CNTT trang bị hệ thống điều hành, giám sát tự động để điều hành sản xuất và quản lý trang trại. Hệ thống camera cảm biến được lắp đặt vừa đảm bảo an ninh, theo dõi sát tình trạng các ao nuôi và nhận cảnh báo các sự cố đột xuất như mất điện, thiết bị hỏng không hoạt động, trang trại của anh còn lắp đặt thiết bị tự động cho cá ăn, tự tạo oxi, tạo chất màu cho nước, tạo sóng… cho ao nuôi. Chi phí lắp đặt hệ thống thiết bị khoảng 50-100 triệu đồng tùy thuộc vào nhu cầu sử dụng nhưng hiệu quả kinh tế mang lại rất cao. Trung bình hệ thống thiết bị tự động điều khiển bằng CNTT thay thế cho 5 lao động phổ thông. Điều quan trọng hơn là chủ trang trại kiểm soát được lượng thức ăn cũng như môi trường nước cho đàn cá phát triển, tránh tối đa việc chăm sóc cá theo cảm tính, ảnh hưởng đến năng suất, chất lượng sản phẩm. Đối với những trang trại trồng trọt ứng dụng công nghệ cao, hầu hết đều áp dụng CNTT trong việc điều tiết tưới nước, cung cấp dinh dưỡng cho cây trồng với phương pháp điều khiển từ xa bằng điện thoại thông minh hay máy tính. Người sản xuất có thể vận hành hệ thống tưới mọi lúc, mọi nơi; có thể kết hợp tưới nước với bón phân. Qua đó giúp người dùng kiểm soát lượng phân bón thích hợp theo đúng tỉ lệ, giúp cây trồng sinh trưởng nhanh và tăng năng suất. Ở thị trấn Quỹ Nhất (Nghĩa Hưng) anh Vũ Văn Khá, khu 8 cũng đầu tư xây dựng nhà lưới diện tích trên 3.000m2, lắp đặt hệ thống tưới nhỏ giọt theo công nghệ Israel để trồng dưa lê Hàn Quốc sọc vàng và dưa leo baby Hà Lan theo tiêu chuẩn VietGAP. Việc tưới và bón phân đều được cài đặt và điều hành trên mạng, nước tưới đúng điểm chính xác tới từng giọt, đáp ứng yêu cầu sinh trưởng của cây trồng trong từng giai đoạn và tiết kiệm được nước tưới. Qua đó, trang trại của anh đã tiết kiệm được hơn 70% khối lượng nước so với phương pháp thủ công, tiết kiệm điện năng tiêu thụ, giảm công lao động. Đồng thời chủ động chăm sóc đến từng cây theo chế độ riêng và mức độ phát triển của cây. Ví như do chất lượng hạt giống không thể đồng nhất 100% hoặc trong quá trình chăm bón, nhà vườn quản lý được nhiệt độ, ánh sáng chung nhưng cũng có cây cần nhu cầu dinh dưỡng đặc biệt hơn để phát triển đồng đều thì dễ dàng điều chỉnh theo cách tưới nhỏ giọt có ứng dụng CNTT này. 

// Những ưu điểm của việc ứng dụng CNTT vào điều hành sản xuất đã mang lại hiệu quả cao. Tuy nhiên để nhân nhanh ra diện rộng việc ứng dụng CNTT trong sản xuất của các trang trại trồng trọt, chăn nuôi quy mô công nghiệp, ngoài yếu tố kinh tế còn rất nhiều yêu cầu về cơ sở hạ tầng vùng nuôi như hệ thống đường giao thông, điện, viễn thông và cả kỹ năng thực hành tin học của các chủ trang trại, cơ sở sản xuất… Trong đó, mô hình ứng dụng CNTT trong sản xuất của các trang trại đòi hỏi cơ sở hạ tầng viễn thông tại khu vực trang trại, cơ sở sản xuất phải đảm bảo kết nối internet tốt, duy trì đường truyền liên tục 24/24h để đảm bảo thông tin, nhận lệnh điều hành tránh trường hợp nghẽn mạng ảnh hưởng đến chế độ quản lý đã mặc định. Đặc biệt, đối với chăn nuôi, nuôi thủy sản quy mô công nghiệp, sơ xuất một chút thì hậu quả thật khó lường. Anh Phong cho biết thêm: Khó khăn nhất của chúng tôi hiện nay là sự cố mạng internet vì bất cứ lý do gì. Trong trường hợp đường truyền bị ngắt kết nối sẽ ảnh hưởng đến việc điều hành tự động đã mặc định. Khi sự cố mất điện xảy ra mà chúng tôi không nhận được tin báo qua điện thoại để xử lý thì chỉ sau vài chục phút ao cá hàng chục tấn sẽ có vấn đề ngay. Bên cạnh đó, thị trường công nghệ hiện rất phong phú, nhiều doanh nghiệp chào mời trong khi khả năng thẩm định công nghệ của nông dân hạn chế khiến chúng tôi lúng túng và không ít lãng phí đã xảy ra trong quá trình lựa chọn công nghệ áp dụng cho trang trại của mình. Để giải quyết khó khăn này, các doanh nghiệp viễn thông, cung ứng công nghệ đầu tư cơ sở hạ tầng cần hỗ trợ nghiên cứu khắc phục bất cập trong quá trình sử dụng công nghệ đối với đặc thù từng vùng sản xuất; chủ động nâng cấp tính năng thiết bị như có chế độ lưu trữ thông tin, tích điện để tạo thời gian trống cho người sử dụng kịp có phương án khắc phục khi sự cố xảy ra. Tiếp tục tháo gỡ khó khăn, tạo điều kiện cho việc đẩy mạnh ứng dụng CNTT vào sản xuất nông nghiệp, Sở Thông tin và Truyền thông, chính quyền địa phương và các doanh nghiệp viễn thông phối hợp với các tổ chức hội, đoàn thể thường xuyên tổ chức các lớp tập huấn nâng cao trình độ, kỹ năng ứng dụng công nghệ. Trong đó tập trung vào việc hướng dẫn kiến thức cơ bản về ứng dụng CNTT phục vụ sản xuất nông nghiệp; một số giải pháp nông nghiệp thông minh cho từng nhóm đối tượng cụ thể của địa phương như nuôi tôm công nghiệp, nuôi thủy sản nước ngọt, nuôi gà chuồng kín và cho trồng trọt; ứng dụng CNTT để chứng minh nguồn gốc hàng hóa cũng như phát triển thị trường cho nông sản. Đồng thời hỗ trợ người dân còn khó khăn trong việc đầu tư thiết bị truyền dữ liệu như máy tính, điện thoại thông minh và duy trì kết nối internet với độ ổn định cao. 

// Ứng dụng CNTT trong sản xuất để nâng cao giá trị gia tăng cho sản phẩm đang là mục tiêu hướng đến trong lộ trình thực hiện tái cơ cấu ngành Nông nghiệp và xây dựng nông thôn mới trong giai đoạn mới. Tháo gỡ những khó khăn này và có cơ chế khuyến khích người dân trong ứng dụng CNTT vào sản xuất không chỉ hiện đại hóa nông nghiệp, nông thôn mà còn giúp ngành Nông nghiệp sớm thực hiện mục tiêu số hóa các hoạt động sản xuất kinh doanh bắt đầu từ khâu quản lý tài nguyên thiên nhiên, sản xuất và tiêu thụ nông sản./.

// Bài và ảnh: Nguyễn Hương</p>
//         </main>
//         <footer>
//             <p>Nguồn bài viết: http://baonamdinh.com.vn/channel/5090/202012/ung-dung-cong-nghe-thong-tin-trong-san-xuat-nong-nghiep-2541627/</p>
//             <small>&copy; 2021</small>
//         </footer>
//     </section>,
//     document.getElementById('root')
// );

//dynamic-property-values-and-text

import React from 'react';
import { render } from 'react-dom';

const enabled = false;
const text = 'A Button';
const placeholder = 'input value...';
const size = 50;

render(
    <section>
        <button disabled={!enabled}>{text}</button>
        <input placeholder={placeholder} size={size} />
    </section>,
    document.getElementById('root')
);