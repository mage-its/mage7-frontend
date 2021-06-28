<template>
    <b-container>
        <b-card-group deck class="mt-4">
            <b-card
                border-variant="white"
                header="Form Upload Bukti Pembayaran"
                header-bg-variant="dark"
                header-text-variant="white"
                align="left"
            >
                <b-card-text> 
                    <b-form action="">
                        <p>Upload File Dibawah Ini</p>
                        <b-form-file type="text" id="namaLengkap" aria-describedby="namaHelp"></b-form-file>
                        <b-button class="mt-4" href="#" variant="outline-secondary">Upload</b-button>
                    </b-form>
                </b-card-text>
            </b-card>
        </b-card-group>
    </b-container>
</template>

<script>
export default {
    name: 'CreatePayment',
}
</script>
<style scoped>

</style>
