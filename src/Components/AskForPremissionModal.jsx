// Material UI
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

// Material UI

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function AskForPremissionModal({ message }) {
  return (
    <>
      <Modal open={true} disablePortal={true}>
        <Box sx={style}>
          <h2 id="child-modal-title">{message}</h2>
          <p id="child-modal-description" dir="rtl">
            يجب السماح بالوصول الى الموقع لإستخدام التطبيق
          </p>
        </Box>
      </Modal>
    </>
  );
}
