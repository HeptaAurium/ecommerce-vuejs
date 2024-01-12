// import TomSelect from './tom-select/TomSelect.vue';
import Loader from './loader/Main.vue';
// import { Modal, ModalBody, ModalFooter, ModalHeader } from './modal';
import CustomSelect from './select/Main.vue';
export default (app) => {
    // app.component("TomSelect", TomSelect);
    app.component("Loader", Loader);
    // app.component("Modal", Modal);
    // app.component("ModalHeader", ModalHeader);
    // app.component("ModalBody", ModalBody);
    // app.component("ModalFooter", ModalFooter);
    app.component("CustomSelect", CustomSelect);
};