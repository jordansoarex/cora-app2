import React, { useState, useMemo } from "react";
import{
    View, Text, StyleSheet, ScrollView, TouchableOpacity, Image,
} from "react-native";
import Checkbox from "expo-checkbox";

export default function ChecklistAbuso(){
    
    const sections = [
        {
            titulo:"1. Controle Excessivo",
            itens: [
                "Ele exige saber todas as minhas senhas e monitorar minhas redes sociais.",
                "Ele controla onde vou, com quem falo e o que faço no meu tempo livre.",
                "Ele decide como devo me vestir e critica minhas escolhas de roupa.",
                "Ele exige que eu peça permissão para sair de casa ou encontrar amigos.",
                "Ele me obriga a compartilhar a localização em tempo real.",
                "Ele invade minha privacidade e exige explicações para tudo.",
                "Ele determina como devo gastar meu dinheiro e proíbe que eu tenha autonomia financeira.",

            ], 
        },

        {
            titulo:"2. Isolamento",
            itens: [
                "Ele cria intrigas para afastar meus amigos e familiares.",
                "Ele diz que minha família é tóxica para que eu rompa contato com eles.",
                "Ele se irrita ou me pune quando quero passar tempo com outras pessoas.",
                "Ele faz comentários negativos sobre meus amigos e os chama de 'má influência'.",
                "Ele impede que eu participe de eventos sociais e desvaloriza minhas amizades.",
                "Ele controla minha agenda e cria conflitos quando quero sair sozinha.",

            ],
        },

        {
            titulo: "3. Manipulação Emocional",
            itens: [
                "Ele se faz de vítima sempre que eu tento falar sobre meus sentimentos.",
                "Ele inverte as situações para que eu pareça culpada por tudo.",
                "Ele usa chantagem emocional para conseguir o que quer.",
                "Ele distorce fatos para me fazer duvidar da minha própria memória (gaslighting).",
                "Ele me dá tratamento de silêncio para me punir quando não ajo como ele quer.",
                "Ele usa minhas inseguranças contra mim para me desestabilizar emocionalmente.",
                "Ele age de forma carinhosa depois de brigas para minimizar a gravidade do que fez.",

            ],
        },

        {
            titulo: "4. Ciúmes Exagerados",
            itens: [
                "Ele quer controlar minhas amizades e me proíbe de falar com certas pessoas.",
                "Ele fica furioso se eu demoro para responder mensagens.",
                "Ele questiona cada curtida ou comentário que recebo nas redes sociais.",
                "Ele diz que sente ciúmes porque me ama e que isso é normal.",
                "Ele faz escândalos em público por situações sem motivo.",
                "Ele me acusa constantemente de traição sem provas.",
                "Ele quer que eu justifique todas as minhas interações sociais.",

            ],
        },

        {
            titulo: "5. Desvalorização e Críticas",
            itens: [
                "Ele me ridiculariza na frente de outras pessoas e diz que é brincadeira.",
                "Ele menospreza minhas conquistas e faz parecer que nada do que faço é importante.",
                "Ele faz comparações negativas com outras mulheres.",
                "Ele critica minha aparência e diz que ninguém mais me aceitaria.",
                "Ele invalida meus sentimentos e diz que estou exagerando.",
                "Ele debocha das minhas opiniões e me faz sentir burra.",
                "Ele diz que sou fraca e incapaz de fazer as coisas sozinha.",
            ],
        },

        {
            titulo: "6. Explosões de Raiva",
            itens: [
                "Ele grita comigo e me xinga quando está irritado.",
                "Ele bate portas, soca paredes ou quebra objetos para me assustar.",
                "Ele ameaça me machucar ou machucar pessoas próximas a mim.",
                "Ele tem mudanças de humor imprevisíveis, sendo carinhoso num momento e agressivo no outro.",
                "Ele culpa o álcool, o estresse ou o trabalho por seus acessos de raiva.",
                "Ele age de forma violenta ao dirigir, colocando minha vida em risco.",
                "Ele ameaça sumir ou se machucar se eu falar em terminar o relacionamento.",
            ],
        },

        {
            titulo: "7. Abuso Financeiro",
            itens: [
                "Ele me impede de trabalhar ou estudar para que eu fique dependente dele.",
                "Ele controla todo o dinheiro da casa e me dá apenas uma mesada.",
                "Ele me obriga a pedir dinheiro e justifica todas as minhas compras.",
                "Ele usa meu dinheiro sem me avisar e se recusa a pagar de volta.",
                "Ele contrai dívidas em meu nome sem minha permissão.",
                "Ele esconde informações financeiras e não me deixa saber sobre a situação do dinheiro.",
                "Ele ameaça me deixar sem recursos se eu quiser terminar o relacionamento.",


            ],
        },

        {
            titulo: "8. Violência Sexual e Coerção",
            itens: [
                "Ele me pressiona para fazer coisas que eu não quero na intimidade.",
                "Ele ignora quando digo 'não' e insiste até que eu ceda.",
                "Ele me culpa por não querer ter relações, dizendo que isso prova que não o amo.",
                "Ele faz chantagem emocional para que eu aceite suas exigências sexuais.",
                "Ele me expõe a situações constrangedoras ou me filma sem meu consentimento.",
                "Ele já teve relações comigo enquanto eu estava dormindo ou sem condições de consentir.",
                "Ele controla meu acesso a métodos contraceptivos e tenta me impedir de usá-los.",
            ],
        },

        {
            titulo: "9. Ameaças e Intimidação",
            itens: [
                "Ele diz que, se eu terminar o relacionamento, ninguém mais vai me querer.",
                "Ele ameaça espalhar mentiras sobre mim para prejudicar minha reputação.",
                "Ele diz que se eu denunciá-lo, vai se vingar de alguma forma.",
                "Ele usa ameaças sutis, como 'se você continuar assim, algo ruim pode acontecer'.",
                "Ele já apontou armas ou objetos cortantes para mim durante brigas.",
                "Ele me ameaça com a guarda dos filhos, dizendo que eu nunca mais os verei.",
                "Ele já simulou tentativas de suicídio para me impedir de deixá-lo.",
            ],
        },

        {
            titulo: "10. Violência Digital e Controle Tecnológico",
            itens: [
                "Ele exige acesso às minhas redes sociais e e-mails.",
                "Ele monitora minha localização por GPS sem meu consentimento.",
                "Ele já enviou mensagens fingindo ser eu para testar minha lealdade.",
                "Ele espalhou ou ameaçou divulgar fotos íntimas minhas.",
                "Ele me impede de seguir ou interagir com certas pessoas online.",
                "Ele usa perfis falsos para me vigiar e testar minha fidelidade.",
                "Ele me pressiona a postar sobre nosso relacionamento para provar que estamos juntos.",
            ],
        },

        {
            titulo: "11. Pressão para Casamento ou Gravidez",
            itens: [
                "Ele insiste para que eu engravide mesmo contra minha vontade.",
                "Ele diz que ter filhos juntos vai resolver nossos problemas.",
                "Ele quer apressar um casamento para que eu não possa mais 'fugir'.",
                "Ele ameaça terminar a relação se eu não quiser casar ou ter filhos.",
                "Ele me faz sentir culpada por não querer um compromisso mais sério agora.",
                "Ele usa a família para me pressionar a seguir planos que não são meus.",
            ],
        },


    ];

    const totalItens = sections.reduce((acc, secao) => acc + secao.itens.length, 0);

    const [marcados, setMarcados] = useState(Array(totalItens).fill(false));


    function toggleItem(indexGlobal)


}