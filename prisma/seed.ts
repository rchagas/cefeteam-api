/* eslint-disable @typescript-eslint/no-unused-vars */
import { Category, Language, PrismaClient, UserType } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  // Online Judge Api and Exercises
  const testJudgeApi = await prisma.onlineJudgeApi.upsert({
    where: { baseApiUrl: 'https://testJudge.io/api' },
    update: {},
    create: {
      baseApiUrl: 'https://testJudge.io/api',
      name: 'Test Judge Api',
      exercises: {
        create: [
          {
            exerciseApiId: 2709,
            name: 'As Moedas de Robbie',
            description:
              'Robbie é um robô muito carismático, e uma das coisas que ele mais gosta de fazer, além de brincar com Glória, é colecionar moedas.',
            level: 9,
            category: Category.BEGINNER,
          },
          {
            exerciseApiId: 1047,
            name: 'Tempo de Jogo com Minutos',
            description:
              'Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.\nObs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.',
            level: 9,
            category: Category.BEGINNER,
          },
          {
            exerciseApiId: 2632,
            name: 'Magic and Sword',
            description:
              'No tower defense Magic and Sword, o jogador pode lançar magias de área para derrotar as unidades inimigas. As magias são elementais: fogo, água, ar e terra, e a região afetada é determinada por um círculo cujo raio depende do nível da magia.',
            level: 8,
            category: Category.BEGINNER,
          },
          {
            exerciseApiId: 3343,
            name: 'Attack On Gasparini',
            description:
              'O grandioso rei da ilha Paradis é avisado que os titãs estão organizando um ataque!\n\nOs titãs possuem 3 tamanhos, titãs pequenos de p metros, titãs médios de m metros e titãs grandes de g metros. Vários titãs de diferentes tamanhos estão se organizando para um ataque, e o rei precisa construir várias muralhas de x metros para pará-los.\n\nFelizmente o rei conhece a estratégia dos titãs, eles atacarão em sequência, um após o outro. Quando um titã de tamanho k encontra uma muralha uma das duas situações acontecem:\n\nSe a muralha for maior ou do mesmo tamanho que o titã, ele destrói k metros da muralha depois se cansa e morre, assim a muralha fica k metros mais baixa.\n\nSe a muralha for menor que o titã, ele pula aquela muralha e segue para a próxima.\n\nO rei pede a você, conselheiro do rei, qual o menor número de muralhas que precisam ser construídas antes do ataque para parar o ataque dos titãs.',
            level: 8,
            category: Category.BEGINNER,
          },
          {
            exerciseApiId: 1478,
            name: 'Matriz Quadrada II',
            description:
              'Escreva um algoritmo que leia um inteiro N (0 ≤ N ≤ 100), correspondente a ordem de uma matriz M de inteiros, e construa a matriz de acordo com o exemplo abaixo.',
            level: 1,
            category: Category.BEGINNER,
          },
          {
            exerciseApiId: 1017,
            name: 'Gasto de Combustível',
            description:
              'Joaozinho quer calcular e mostrar a quantidade de litros de combustível gastos em uma viagem, ao utilizar um automóvel que faz 12 KM/L. Para isso, ele gostaria que você o auxiliasse através de um simples programa. Para efetuar o cálculo, deve-se fornecer o tempo gasto na viagem (em horas) e a velocidade média durante a mesma (em km/h). Assim, pode-se obter distância percorrida e, em seguida, calcular quantos litros seriam necessários. Mostre o valor com 3 casas decimais após o ponto.',
            level: 1,
            category: Category.BEGINNER,
          },
          {
            exerciseApiId: 1028,
            name: 'Figurinhas',
            description:
              'Ricardo e Vicente são aficionados por figurinhas. Nas horas vagas, eles arrumam um jeito de jogar um “bafo” ou algum outro jogo que envolva tais figurinhas. Ambos também têm o hábito de trocarem as figuras repetidas com seus amigos e certo dia pensaram em uma brincadeira diferente. Chamaram todos os amigos e propuseram o seguinte: com as figurinhas em mãos, cada um tentava fazer uma troca com o amigo que estava mais perto seguindo a seguinte regra: cada um contava quantas figurinhas tinha. Em seguida, eles tinham que dividir as figurinhas de cada um em pilhas do mesmo tamanho, no maior tamanho que fosse possível para ambos. Então, cada um escolhia uma das pilhas de figurinhas do amigo para receber. Por exemplo, se Ricardo e Vicente fossem trocar as figurinhas e tivessem respectivamente 8 e 12 figuras, ambos dividiam todas as suas figuras em pilhas de 4 figuras (Ricardo teria 2 pilhas e Vicente teria 3 pilhas) e ambos escolhiam uma pilha do amigo para receber.',
            level: 3,
            category: Category.MATH,
          },
          {
            exerciseApiId: 1093,
            name: 'Vampiros',
            description:
              'Felipinho está empolgado com seu novo jogo de RPG sobre guerras entre clãs de vampiros. Nesse jogo ele representa um personagem de um vampiro e constantemente entra em conflito contra vampiros de outros clãs. Tais batalhas são realizadas com base nas características de cada personagem envolvido e com a ajuda de um dado comum de seis faces. Por simplicidade, vamos considerar apenas as lutas entre dois vampiros, vampiro 1 e vampiro 2. Cada um possui uma energia vital (chamaremos de EV1 e EV2 respectivamente) e, além disso, são determinadas uma força de ataque AT e uma capacidade de dano D.',
            level: 3,
            category: Category.MATH,
          },
          {
            exerciseApiId: 1138,
            name: 'Contagem de Dígitos',
            description:
              'Diana escreverá uma lista com todos os inteiros positivos entre A e B, inclusive, na base decimal e sem zeros à esquerda. Ela quer saber quantas vezes cada um dos dígitos irá ser usado.',
            level: 8,
            category: Category.MATH,
          },
          {
            exerciseApiId: 1026,
            name: 'Carrega ou não Carrega?',
            description:
              'Veja só. Mofiz trabalhou duro durante seu curso de Eletrônica Digital, mas quando lhe foi solicitado que implementasse um somador de 32 bits como exame no laboratório, ele acabou fazendo algum erro na parte de projeto. Depois de vasculhar seu projeto por uma hora e meia, ele encontrou seu erro. Ele estava fazendo soma de bits, mas seu carregador de bit (carry) sempre apresentava como saída o valor zero. Portanto,',
            level: 5,
            category: Category.ADHOC,
          },
          {
            exerciseApiId: 1024,
            name: 'Criptografia',
            description:
              'Solicitaram para que você construisse um programa simples de criptografia. Este programa deve possibilitar enviar mensagens codificadas sem que alguém consiga lê-las. O processo é muito simples. São feitas três passadas em todo o texto.',
            level: 5,
            category: Category.STRINGS,
          },
          {
            exerciseApiId: 1022,
            name: 'TDA Racional',
            description:
              'A tarefa aqui neste problema é ler uma expressão matemática na forma de dois números Racionais (numerador / denominador) e apresentar o resultado da operação. Cada operando ou operador é separado por um espaço em branco. A sequência de cada linha que contém a expressão a ser lida é: número, caractere, número, caractere, número, caractere, número. A resposta deverá ser apresentada e posteriormente simplificada. Deverá então ser apresentado o sinal de igualdade e em seguida a resposta simplificada. No caso de não ser possível uma simplificação, deve ser apresentada a mesma resposta após o sinal de igualdade.',
            level: 4,
            category: Category.STRUCTS,
          },
          {
            exerciseApiId: 2602,
            name: 'Select Básico',
            level: 4,
            category: Category.SQL,
          },
          {
            exerciseApiId: 1027,
            name: 'Onda Crítica',
            description:
              'A tarefa é simples. Através de alguns pontos críticos em 2D, você deve desenhar uma onda como uma curva. Seu objetivo é incluir tantos pontos quantos forem possível.',
            level: 9,
            category: Category.PARADIGMS,
          },
          {
            exerciseApiId: 1053,
            name: 'Desenho Contínuo',
            description:
              'A primeira linha de entrada é um inteiro T(T<20) que indica o número total de casos de teste. Cada caso inicia com um inteiro N (N<10). Então N linhas vem a seguir, cada uma descrevendo um segmento de linha. Um segmento de linha é definido por dois pontos Y1X1 Y2X2. Y1 e Y2 estarão no intervalo [A,E]. X1 e X2 estarão no intervalo [1,5]. O primeiro exemplo é mostrado na figura acima. Portanto, olhe para o exemplo para compreender o formato exato.',
            level: 10,
            category: Category.GRAPHS,
          },
        ],
      },
    },
  });

  // Users
  const coach = await prisma.user.upsert({
    where: { email: 'coach@prisma.io' },
    update: {},
    create: {
      email: 'coach@prisma.io',
      name: 'Prof. Xavier',
      userType: UserType.COACH,
    },
  });

  const gustavo = await prisma.user.upsert({
    where: { email: 'gustavo@prisma.io' },
    update: {},
    create: {
      email: 'gustavo@prisma.io',
      name: 'Gustavo Silva',
      onlineJudgeProfile: {
        create: [
          {
            onlineJudgeApiId: 1,
            profileId: 1231,
            username: 'gutosilva',
            ranking: 40,
            score: 1200,
            exercisesResolved: 5,
            exercisesTried: 7,
            submissions: 9,
          },
        ],
      },
      userExercises: {
        create: [
          {
            exerciseId: 1,
            language: Language.C,
          },
          {
            exerciseId: 2,
            language: Language.C,
          },
          {
            exerciseId: 2,
            language: Language.CSHARP,
          },
          {
            exerciseId: 5,
            language: Language.JAVASCRIPT,
          },
          {
            exerciseId: 6,
            language: Language.C,
          },
        ],
      },
    },
  });

  const marcela = await prisma.user.upsert({
    where: { email: 'marcela@prisma.io' },
    update: {},
    create: {
      email: 'marcela@prisma.io',
      name: 'Marcela Silva',
      onlineJudgeProfile: {
        create: [
          {
            onlineJudgeApiId: 1,
            profileId: 951,
            username: 'cella.silva',
            ranking: 90,
            score: 800,
            exercisesResolved: 5,
            exercisesTried: 7,
            submissions: 9,
          },
        ],
      },
      userExercises: {
        create: [
          {
            exerciseId: 1,
            language: Language.JAVA,
          },
          {
            exerciseId: 2,
            language: Language.JAVA,
          },
          {
            exerciseId: 3,
            language: Language.JAVA,
          },
          {
            exerciseId: 5,
            language: Language.JAVA,
          },
          {
            exerciseId: 6,
            language: Language.JAVA,
          },
        ],
      },
    },
  });

  const oswaldo = await prisma.user.upsert({
    where: { email: 'oswaldo@prisma.io' },
    update: {},
    create: {
      email: 'oswaldo@prisma.io',
      name: 'Oswaldo Silva',
      onlineJudgeProfile: {
        create: [
          {
            onlineJudgeApiId: 1,
            profileId: 1231,
            username: 'waldocodes',
            ranking: 10,
            score: 1000,
            exercisesResolved: 5,
            exercisesTried: 7,
            submissions: 9,
          },
        ],
      },
      userExercises: {
        create: [
          {
            exerciseId: 4,
            language: Language.CPLUSPLUS,
          },
          {
            exerciseId: 5,
            language: Language.CPLUSPLUS,
          },
          {
            exerciseId: 6,
            language: Language.CPLUSPLUS,
          },
          {
            exerciseId: 7,
            language: Language.CPLUSPLUS,
          },
          {
            exerciseId: 8,
            language: Language.CPLUSPLUS,
          },
        ],
      },
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
