export default class ModalContentProvider {
    constructor() {
      this.modalContents = {
        aboutMe: {
          title: 'About me',
          description: 'I am a rising sophomore at the University of Michigan, where I study Math and Computer Science. <br> <a href="https://www.linkedin.com/in/zhang-yu-jie/" target="_blank" rel="noopener noreferrer">LinkedIn</a>',
        },
        projects: {
          title: 'Projects',
          description: '<a href="https://github.com/zhangdomi" target="_blank" rel="noopener noreferrer">Orderbook</a>: A three level orderbook that supports <b>ordertypes</b> such as <i>Fill and Kill</i>, <i>Fill or Kill</i>, <i>Good \'Til Cancel</i> and key <b>operations</b> such as <i>add, cancel or modify</i> <br> <br> <a href="https://github.com/zhangdomi" target="_blank" rel="noopener noreferrer">Euchre</a>: A Mid-Western card game simulator allowing at most 4 human players to play simultaneously <br> <br> More coming...',
        },
        contactMe: {
          title: 'Course Reviews',
          description: 'A biased review of UMich classes, compiled by a Math & CS kid (me). <br> <a href="https://docs.google.com/document/d/11CwAcdEzU7ltuhSxzo_O3B8DOsW7xKYAmeB84HG73z8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Course Reviews</a>',
        },
        quant:{
          title: 'Quant Resources',
          description: 'I am currently recruiting for quantitative finance and software engineering internships, as the Co-President of Michigan Finance and Math Society, I compiled some resources. <br> Find it <a href="https://docs.google.com/document/d/1H33p5LC6DV-jEm25BaBhmULfhvCAgZbggin_DZYorDc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">here</a>. '
        }
      }
    }
  
    getModalInfo(portalName) {
      return this.modalContents[portalName];
    }
  }
  