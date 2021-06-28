<template>
    <b-container>
        <h3 class="text-left">Upload Jawaban</h3><hr/>
        <b-card-group deck class="mt-4">
            <b-card
                border-variant="white"
                header="Upload Jawaban"
                header-bg-variant="dark"
                header-text-variant="white"
                align="left"
            >
                <b-card-text> 
                    <b-form action="">
                        <p>Upload File Dibawah Ini</p>
                        <b-form-file rows="3" type="text" id="namaLengkap" aria-describedby="namaHelp"></b-form-file>
                        <b-button class="mt-4" href="#" variant="outline-secondary">Upload</b-button>
                    </b-form>
                </b-card-text>
            </b-card>
        </b-card-group>
    </b-container>
</template>

<script>
export default {
    name: 'UploadAnswerFile',
}
</script>