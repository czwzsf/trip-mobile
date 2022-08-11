<template>
  <!--评论列表-->
  <div class="comment-item-box">
    <div class="cmt-header">
      <div class="rate">
        <van-rate v-model="value" readonly/>
      </div>
      <div class="user">张三****</div>
    </div>
    <div class="cmt-content">
      <p>
        评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容
      </p>
      <!--图片列表-->
      <div class="cmt-imgs">
        <van-image
          width="100"
          height="100"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <van-image
          width="100"
          height="100"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <van-image
          width="100"
          height="100"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <van-image
          width="100"
          height="100"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentItem',
  data () {
    return {
      value: 4.5
    }
  }
}
</script>

<style lang="less">
.comment-item-box {
  padding: 5px 10px;
  border-bottom: 1px solid #f6f6f6;

  .cmt-header {
    display: flex;
    justify-content: space-between;

    .user {
      font-size: 12px;
    }
  }

  .cmt-content {
    color: #616161;
    padding: 5px 0;
    text-align: left;
    font-size: 12px;
    line-height: 2.0;
  }

  .cmt-imgs {
    padding: 5px;
    text-align: left;
    margin-right: 5px;
  }
}
</style>
