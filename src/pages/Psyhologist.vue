<template>
    <div class="personal-area">
         <div class="avatar">
            <img src="https://sun9-52.userapi.com/c855216/v855216062/1f69b6/POMI5Q3OLII.jpg" alt="">
        </div>
        <div class="name">
            <h1>Владимир Строев</h1>
        </div>
        <div class="about">
            <p class="about-title"><i class="fas fa-quote-left"></i> О себе</p>
            <p class="about-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non a ipsum provident voluptatem sint voluptas mollitia expedita ullam, illum, enim unde labore aliquid eius exercitationem neque reprehenderit quo deserunt placeat.
            Eveniet quod sint iure corrupti impedit sapiente officia sunt sit nam quae blanditiis incidunt dolorum provident architecto doloribus, veritatis mollitia dolorem cum laborum laboriosam inventore nulla minima fugiat? Quidem, error!
            Reprehenderit at sunt quis mollitia, ratione earum soluta magnam maxime. Recusandae pariatur provident ipsum cupiditate qui incidunt! Atque suscipit vel eveniet neque libero, pariatur praesentium rerum voluptate placeat error? Repellendus!
            Alias distinctio quasi eligendi odio amet commodi fuga, neque impedit nihil iusto, similique quo rerum beatae voluptates, velit id assumenda. Qui ea ullam quo at enim similique a eius facere.
            Molestiae vel harum eaque, eius magni voluptas! Quae accusamus nam nostrum, non aut ipsum labore, voluptas consectetur voluptatum molestias magnam molestiae ut ullam magni eum! Fugiat voluptatibus modi impedit earum.</p>
        </div>
        <div class="w-full flex flex-col mt-6 lg:flex-row">
           <Card class="w-1/3 mr-6">
				<section class="mb-10 mx-10">
					<h3 class="text-5xl text-left">5 лет</h3>
					<p class="flex items-center text-black-3 text-lg">
						Опыт работы
					</p>
				</section>
			</Card>
            <Card class="w-1/3 mr-6">
				<section class="mb-10 mx-10">
					<h3 class="text-5xl text-left">42 года</h3>
					<p class="flex items-center text-black-3 text-lg">
						Возраст
					</p>
				</section>
			</Card>
            <Card class="w-1/3 mr-6">
				<section class="mb-10 mx-10">
					<h3 class="text-5xl text-left">12</h3>
					<p class="flex items-center text-black-3 text-lg">
						Пациентов
					</p>
				</section>
			</Card>
        </div>
    </div>
</template>

<script>
import Card from "../components/Card"
export default {
    data: () => ({

    }),

     components: {
      Card
    },
}
</script>

<style scoped>
    .personal-area{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px;
    }

    .avatar{
        display: flex;
        justify-content: center;
    }

    .avatar img{
        width: 210px;
        height: 210px;
        border-radius: 50%;
    }

    .name{
        margin-top: 30px;
    }
    
    .name h1{
        font-size: 36px;
        font-weight: bold;
    }
    
    .about{
        max-width: 900px;
        margin-top: 40px;
        background-color: white;
        padding: 10px;
        border-radius: 10px;
    }

    .about-title{
        text-align: left;
        font-size: 30px;
        font-weight: bold;
    }

    .about-info{
        font-size: 20px;
        text-align: left;
        -moz-hyphens: auto;
        -webkit-hyphens: auto;
        -ms-hyphens: auto;
    }
</style>