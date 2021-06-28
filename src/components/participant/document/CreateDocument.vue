<template>
    <b-container>
        <b-card-group deck class="mt-4">
            <b-card
                border-variant="white"
                header="Form Tambah Dokumen"
                header-bg-variant="dark"
                header-text-variant="white"
                align="left"
            >
                <b-card-text> 
                    <b-form action="">
                        <b-form-group id="input-group-2" label="Nama:" label-for="input-2">
                            <b-form-input
                            id="input-2"
                            required
                            placeholder="Masukkan nama"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Asal:" label-for="input-2">
                            <b-form-input
                            id="input-2"
                            required
                            placeholder="Masukkan Asal"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Sekolah:" label-for="input-2">
                            <b-form-input
                            id="input-2"
                            required
                            placeholder="Masukkan Sekolah"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-4">
                            <b-form-checkbox-group id="checkboxes-4">
                            <b-form-checkbox value="me">Pilihan 1</b-form-checkbox>
                            <b-form-checkbox value="that">Pilihan 2</b-form-checkbox>
                            </b-form-checkbox-group>
                        </b-form-group>

                        <b-button type="submit" variant="success">Simpan</b-button>
                    </b-form>
                </b-card-text>
            </b-card>
        </b-card-group>
    </b-container>
</template>