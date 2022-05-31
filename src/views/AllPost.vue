<template>
  <div class="container mt-5 mb-5">
    <div class="bg-light p-3">
      <ProfilePicture
        v-if="imageProfile == 'null'"
        :src="'../assets/user-circle.svg'"
        class="newPost__photo"
      />
      <ProfilePicture v-else :src="imageProfile" class="newPost__photo" />
      <NewPost/>
    </div>
    <div class="">
      <Post
        v-for="singlePost in allPosts"
        :key="singlePost.id"
        :post="singlePost"
      />      
    </div>
  </div>
</template>

<script>
import ProfilePicture from "@/components/ProfilePicture.vue";
import NewPost from "@/components/NewPost.vue";
import Post from "@/components/Post.vue";


export default {
  name: "AllPost",
  components: {
    ProfilePicture,
    NewPost,
    Post,
    
  },
  data() {
    return {
      imageProfile: null,
      newPost: {
        text: "",
        imageUrl: "",
      },
      allPosts: [
        {
          imageUrl: "https://picsum.photos/200/300",
          text: "hello, comment allez-vous?",
        },
        {
          imageUrl: "https://picsum.photos/500/400",
          text: "Bonjour je suis",
        },
        {
          imageUrl: "https://picsum.photos/600/400",
          text: "Bonjour je ne suis pas",
        },
      ],
    };
  },
  methods: {
    onFileSelected() {},
    publier() {
      const allPosts = [
        {
          ...this.newPost,
          imageUrl: "https://picsum.photos/seed/picsum/600/300",
        },
        ...this.allPosts,
      ];
      this.allPosts = allPosts;
    },
    currentDateTime() {
      let date = new Date();
      let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "2-digit",
      };
      date = date.toLocaleDateString("fr-FR", options);

      return date;
    },
  },

  computed: {
    /*allPosts: {
      get() {
        return [
          {
            imageUrl: "https://picsum.photos/200/300",
            text: "hello, comment allez-vous?",
          },
          {
            imageUrl: "https://picsum.photos/500/400",
            text: "Bonjour je suis",
          },
          {
            imageUrl: "https://picsum.photos/600/400",
            text: "Bonjour je ne suis pas",
          },
        ];
      },
    },*/
  },
};
</script>
