<template>
  <div class="container">
    <vue-like-dislike-buttons
      :likes="likes"
      :dislikes="dislikes"
      :likeChecked="likeChecked"
      :dislikeChecked="dislikeChecked"
      @like="like"
      @dislike="dislike"
    />
  </div>
</template>
<script>


export default {
  name: "LikeDislike",
  
  data() {
    return {
      likes: 989,
      dislikes: 0,
      likeChecked: false,
      dislikeChecked: false
    };
  },
  methods: {
    like() {
      this.likes += 1;
    },
    dislike() {
      this.dislikes += 1;
    }
  }
};
</script>