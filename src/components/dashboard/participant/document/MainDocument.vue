<template>
  <b-container>
    <form
      id="dropFileForm"
      action="http://anavaugm.com/upload.php"
      method="post"
      onsubmit="uploadFiles(event)"
    >
      <input
        type="file"
        name="files[]"
        id="fileInput"
        multiple
        onchange="addFiles(event)"
      />

      <label
        for="fileInput"
        id="fileLabel"
        ondragover="overrideDefault(event);fileHover();"
        ondragenter="overrideDefault(event);fileHover();"
        ondragleave="overrideDefault(event);fileHoverEnd();"
        ondrop="overrideDefault(event);fileHoverEnd();
        addFiles(event);"
      >
        <i class="fa fa-download fa-5x"></i>
        <br />
        <span id="fileLabelText">
          Choose a file or drag it here
        </span>
        <br />
        <span id="uploadStatus"></span>
      </label>

      <input type="submit" value="Upload" class="uploadButton" />
    </form>
  </b-container>
</template>
<script>
export default {
  name: "MainDocument",
};
</script>
<style>
#dropFileForm {
  margin: 16px;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  transition: 0.5s;
}

#dropFileForm #fileLabel {
  background-color: rgba(0, 255, 0, 0.5);
  display: block;
  padding: 16px;
  position: relative;
  cursor: pointer;
}

#dropFileForm #fileInput {
  display: none;
}

#dropFileForm #fileLabel:after,
#dropFileForm #fileLabel:before {
  position: absolute;
  content: "";
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: -2;
  border-radius: 8px 8px 0 0;
}

#dropFileForm #fileLabel:before {
  z-index: -1;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 5%,
    black 5%,
    black 10%
  );
  opacity: 0;
  transition: 0.5s;
}

#dropFileForm.fileHover #fileLabel:before {
  opacity: 0.25;
}

#dropFileForm .uploadButton {
  border: 0;
  outline: 0;
  width: 100%;
  padding: 8px;
  background-color: limeGreen;
  color: #fff;
  cursor: pointer;
}

#dropFileForm.fileHover {
  box-shadow: 0 0 16px limeGreen;
}

</style>
