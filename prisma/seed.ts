import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

const categoriesSelect = [
    "Программирование",
    "Дизайн",
    "Маркетинг",
    "Бизнес",
    "Финансы",
    "Образование",
    "Психология",
    "Искусство",
    "Музыка",
    "Наука",
    "Спорт",
    "Здоровье",
    "Путешествия",
    "Технологии",
    "Фотография"
];

const postsData = [
    {
        title: "Что такое программирование?",
        description: "Статья для начинающих программистов.",
        author: "Иван Иванов",
        category: "Программирование"
    },
    {
        title: "Основы дизайна",
        description: "Как начать заниматься дизайном и что для этого нужно?",
        author: "Мария Петрова",
        category: "Дизайн"
    },
    {
        title: "Маркетинг в 2025 году",
        description: "Актуальные тренды маркетинга на следующий год.",
        author: "Алексей Смирнов",
        category: "Маркетинг"
    }
];

async function main() {
    for (let i = 0; i < categoriesSelect.length; i++) {
        await Prisma.category.create({
            data: {
                name: categoriesSelect[i]
            }
        });
    }

    for (let postData of postsData) {
        const category = await Prisma.category.findUnique({
            where: { name: postData.category }
        });

        if (category) {
            await Prisma.post.create({
                data: {
                    title: postData.title,
                    description: postData.description,
                    author: postData.author,
                    categoryId: category.id
                }
            });
        }
    }
}

main()
    .then(async () => {
        await Prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await Prisma.$disconnect();
        process.exit(1);
    });
