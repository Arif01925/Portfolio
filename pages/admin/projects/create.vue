<template>
  <div>
    <form @submit.prevent="submitForm" enctype="multipart/form-data" class="space-y-4 max-w-md">
      <input type="text" v-model="title" class="form-input" placeholder="Title" required />
      <textarea v-model="description" class="form-input" placeholder="Description" required></textarea>

      <select v-model="type" class="form-input" required>
        <option value="">-- Select Type --</option>
        <option v-for="t in types" :key="t.id" :value="t.name">{{ t.name }}</option>
      </select>

      <input type="date" v-model="date" class="form-input" required />

      <div>
        <label class="block">Thumbnail Image</label>
        <input type="file" @change="e => thumbnail = e.target.files[0]" accept="image/*" />
      </div>

      <div>
        <label class="block">Project Images</label>
        <input type="file" multiple @change="e => images = Array.from(e.target.files)" accept="image/*" />
      </div>

      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Save Project</button>
    </form>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' })
import { ref, onMounted } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast();
const title = ref('');
const description = ref('');
const type = ref('');
const date = ref('');
const thumbnail = ref(null);
const images = ref([]);
const types = ref([]);

onMounted(async () => {
  try {
    const res = await fetch('/api/project-types');
    types.value = await res.json();
  } catch (error) {
    toast.error('Failed to load project types');
  }
});

const submitForm = async () => {
  try {
    const formData = new FormData();
    formData.append('title', title.value);
    formData.append('description', description.value);
    formData.append('type', type.value);
    formData.append('date', date.value);
    if (thumbnail.value) formData.append('thumbnail', thumbnail.value);
    images.value.forEach((img, i) => formData.append('images', img));

    console.log('Sending form data:', {
      title: title.value,
      description: description.value,
      type: type.value,
      date: date.value,
      thumbnail: thumbnail.value,
      images: images.value,
    });

    const res = await fetch('/api/projects', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) throw new Error('Failed to save');

    toast.success('Project saved successfully');
    title.value = description.value = type.value = date.value = '';
    thumbnail.value = null;
    images.value = [];
  } catch (err) {
    console.error('Error during submission:', err);
    toast.error('Failed to save project');
  }
};
</script>

<style scoped>
.form-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
