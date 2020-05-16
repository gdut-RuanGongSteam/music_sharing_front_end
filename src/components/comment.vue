<template>
	<div class="container">
		<div class="head-container">
			<img src="../assets/image/1.jpg" alt="head">
		</div>
		<div class="comment-container">
			<div class="reply">
				<router-link :to="{ name: 'personalCenter' }">你靓</router-link>
				：<span>嘤嘤嘤呀呀呀呀呀呀晕晕晕晕</span>
			</div>
			<div class="comment">
				<span class="darr">
					<i class="bd">◆</i>
					<i class="bg">◆</i>
				</span>
				<router-link :to="{ name: 'personalCenter' }">他靓</router-link>
				：<span>嘤嘤嘤呀呀呀呀呀呀晕晕晕晕</span>
			</div>
			<div class="footer-container">
				<div class="date">昨天02:01</div>
				<div>
					<i class="el-icon-supportzan"></i>
					<span> (1)</span>
					<span class="sep">|</span>
					<a href="javascript:void(0)" class="reply-btn">回复</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "comment",
	}
</script>

<style lang="scss" scoped>
	a {
		color: #0c73c2;
		text-decoration: none;
	}

	.container {
		display: flex;
		font-family: Arial, Helvetica, sans-serif;
		padding: 10px;
		border-bottom: 1px dotted #ccc;

		// 头像框
		.head-container {
			margin-right: 14px;

			img {
				width: 50px;
				height: 50px;
			}
		}

		.comment-container {
			display: flex;
			align-items: start;
			flex-direction: column;
			font-size: 13px;
			width: 100%;

			// 回复
			.reply {
				margin-bottom: 12px;
			}

			// 评论
			.comment {
				position: relative;
				width: calc(100% - 50px);
				padding: 10px 15px;
				background-color: #f4f4f4;
				text-align: left;
				border: 1px solid #dedede;

				.darr {
					position: absolute;
					top: -7px;
					left: 20px;
					font-size: 15px;
					line-height: 14px;
					/*border: 1px solid #dedede;*/

					i {
						font-style: normal;
						position: absolute;
						top: 0;
						left: 0;
					}

					.bg {
						color: #f4f4f4;
						top: 1px;
					}

					.bd {
						color: #dedede;
					}
				}
			}

			.footer-container {
				width: calc(100% - 20px);
				display: flex;
				justify-content: space-between;
				margin-top: 10px;

				.date {
					float: left;
					font-size: 12px;
					color: #999;
				}

				.el-icon-supportzan {
					cursor: pointer;
					color: #1b82f1;
					font-size: 14px;
				}

				.sep {
					margin: 0 8px;
					color: #ccc;
				}

				.reply-btn {
					font-size: 13px;
					color: #666;

					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
	}
</style>
