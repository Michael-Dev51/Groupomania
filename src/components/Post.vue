<template>
  <div class="container col-12 bg-light mt-4 p-3 mx-auto">
    <div class="newPost__photo border-bottom mb-2">
      <ProfilePicture
        v-if="imageProfile == 'null'"
        :src="'../assets/user-circle.svg'"
        class="newPost__photo"
      />
      <ProfilePicture v-else :src="imageProfile" class="newPost__photo" />
      <!--<h2>{{ user }}</h2> -->
    </div>

    <div class="col-12 d-flex justify-content-center">
      <b-img :src="post.imageUrl" fluid />
    </div>

    <div class="d-flex justify-content-around mt-2 border-top mb-2 pt-2">      
      <CreateComment/>
    </div>
    <div class="d-flex justify-content-around mt-2 mb-2 pt-2">      
      <LikeDislike/>
    </div>
  </div>
</template>

<script>
import ProfilePicture from "@/components/ProfilePicture.vue";
import LikeDislike from "@/components/LikeDislike.vue"
import CreateComment from "@/components/CreateComment.vue"

export default {
  name: "Post",
  data() {
    return {
      imageProfile: null,
    };
  },
  components: {
    ProfilePicture,
    LikeDislike,
    CreateComment,
  },
  props: {
    post: { type: Object },
  },
};
</script>

<style>
.post__img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
