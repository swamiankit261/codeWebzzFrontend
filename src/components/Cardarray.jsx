// const images = import.meta.glob('../assets/overView/*.png', { eager: true });

// // Extract file names and generate card data
// let cardData = Object.entries(images).map(([path, module]) => {
//     // Extract the filename without extension
//     const fileName = path.split('/').pop().replace('.png', '');
    
//     return {
//         title: 'Write your own title',
//         description: 'Write description first',
//         imageURL: module.default,  // Get the imported image
//         webURL: `https://${fileName}.com`,
//     };
// });

// export default cardData;


import img1 from '../assets/overView/ramaprinters.png';
import img2 from '../assets/overView/ozobi.png';
import img3 from '../assets/overView/fashion-7.png';
import img4 from '../assets/overView/fashionoyo.png';
import img5 from '../assets/overView/aroyaltour.png';
import img6 from '../assets/overView/lohiyasgalleria.png';
import img7 from '../assets/overView/addesigners.png';
import img8 from '../assets/overView/agrijsupport.png';
import img9 from '../assets/overView/apolloindia.png';
import img10 from '../assets/overView/artiegroup.png';
import img11 from '../assets/overView/bassmat.png';
import img12 from '../assets/overView/chandraweddings.png';
import img13 from '../assets/overView/couriernet.png';
import img14 from '../assets/overView/greenprinttech.png';
import img15 from '../assets/overView/gutly.png';
import img16 from '../assets/overView/hotelgrandcorner.png';
import img17 from '../assets/overView/imageinxp.png';
import img18 from '../assets/overView/jimsjaipur.png';
import img19 from '../assets/overView/landscapestudio.png';
import img20 from '../assets/overView/m4adesigns.png';
import img21 from '../assets/overView/mellow.png';
import img22 from '../assets/overView/memphis-hotel.png';
import img23 from '../assets/overView/policy-penguin.png';
import img24 from '../assets/overView/rufil.png';
import img25 from '../assets/overView/shartratechnology.png';
import img26 from '../assets/overView/slidety.png';
import img27 from '../assets/overView/taggbox.png';
import img28 from '../assets/overView/troubleshootersindia.png';
import img29 from '../assets/overView/tushartrading.png';
import img30 from '../assets/overView/ultratrainingsystem.png';
import img31 from '../assets/overView/uniquesubmission.png';

const imageData = [
    { name: 'ramaprinters', img: img1 },
    { name: 'fashion-7', img: img3 },
    { name: 'fashionoyo', img: img4 },
    { name: 'aroyaltour', img: img5 },
    { name: 'lohiyasgalleria', img: img6 },
    { name: 'policy-penguin', img: img23 },
    { name: 'jimsjaipur', img: img18 },
    { name: 'apolloindia', img: img9 },
    { name: 'addesigners', img: img7 },
    { name: 'agrijsupport', img: img8 },
    { name: 'ozobi', img: img2 },
    { name: 'artiegroup', img: img10 },
    { name: 'bassmat', img: img11 },
    { name: 'chandraweddings', img: img12 },
    { name: 'couriernet', img: img13 },
    { name: 'greenprinttech', img: img14 },
    { name: 'gutly', img: img15 },
    { name: 'hotelgrandcorner', img: img16 },
    { name: 'imageinxp', img: img17 },
    { name: 'landscapestudio', img: img19 },
    { name: 'm4adesigns', img: img20 },
    { name: 'mellow', img: img21 },
    { name: 'memphis-hotel', img: img22 },
    { name: 'rufil', img: img24 },
    { name: 'shartratechnology', img: img25 },
    { name: 'slidety', img: img26 },
    { name: 'taggbox', img: img27 },
    { name: 'troubleshootersindia', img: img28 },
    { name: 'tushartrading', img: img29 },
    { name: 'ultratrainingsystem', img: img30 },
    { name: 'uniquesubmission', img: img31 }
];

const cardData = imageData.map(({ name, img }) => ({
    title: 'Write your own title',
    description: 'Write description first',
    imageURL: img,
    webURL: `https://${name}.com`
}));

export default cardData;
