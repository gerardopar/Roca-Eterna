import image1 from '../assets/ss-img/iglesia1-min.jpg';
import image2 from '../assets/ss-img/iglesia2-min.jpg';
import image3 from '../assets/ss-img/iglesia3-min.jpg';
import image4 from '../assets/ss-img/iglesia4-min.jpg';
import image5 from '../assets/ss-img/iglesia5-min.jpg';
import image6 from '../assets/ss-img/iglesia6-min.jpg';
import image7 from '../assets/ss-img/iglesia7-min.jpg';
import image8 from '../assets/ss-img/iglesia8-min.jpg';
import image9 from '../assets/ss-img/iglesia9-min.jpg';
import image10 from '../assets/ss-img/iglesia10-min.jpg';
import image11 from '../assets/ss-img/iglesia11-min.jpg';
import image12 from '../assets/ss-img/iglesia12-min.jpg';
import image13 from '../assets/ss-img/iglesia13-min.jpg';
import image14 from '../assets/ss-img/iglesia14-min.jpg';
import image15 from '../assets/ss-img/iglesia15-min.jpg';
import image16 from '../assets/ss-img/iglesia16-min.jpg';
import image17 from '../assets/ss-img/iglesia17-min.jpg';
import image18 from '../assets/ss-img/iglesia18-min.jpg';
import image19 from '../assets/ss-img/iglesia19-min.jpg';
import image20 from '../assets/ss-img/iglesia20-min.jpg';
import image21 from '../assets/ss-img/iglesia21-min.jpg';
import image22 from '../assets/ss-img/iglesia22-min.jpg';
import image23 from '../assets/ss-img/iglesia23-min.jpg';
import image24 from '../assets/ss-img/iglesia24-min.jpg';

// slide show function
const slideShow = () => {

    let images = [
        image1, image2, image3, image4, image5, 
        image6, image7, image8, image9, image10,
        image11, image12, image13, image14, image15, 
        image16, image17, image18, image19, image20,
        image21, image22, image23, image24 
    ]; // images list
    
    // selecting dom elements 
    let next = document.querySelector('#plus');
    let prev = document.querySelector('#prev');
    let content = document.querySelector('#content');
    let i = 0; // initial image index
    content.src = images[i]; //appending image to the dom element

    next.addEventListener('click', (e) => { //onclick increase image index
        e.preventDefault();
        i++;
        if(i === images.length) { // if the image index reaches its max length reset the index
            i = 0; // set the index back to 0
        }
        content.innerHTML = '';
        content.src = images[i];
    });

    prev.addEventListener('click', (e) => { //onclick decrease image index
        e.preventDefault();
        i--;
        if(i === -1){ // if the image index reaches negative digits reset the index
            i = images.length - 1; // set the index back to its max - 1
        }
        content.innerHTML = '';
        content.src = images[i];
    });

};

export { slideShow };