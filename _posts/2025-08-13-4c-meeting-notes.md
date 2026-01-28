---
layout: post
title:  "[CN] Meeting Notes for 4C Competition"
date:   2025-08-13 20:00:00 +0800
categories: ai4bio
excerpt: "Selected notes when preparing for the Collegiate Computational Design Competition of China. Note it's in Chinese (Simplified)."
---

<br>

Although didn't get an ideal result (we expected for a first prize 🤣, but it's another story...), some thoughts during our preparations worth further consideration. Particularly about presenting (storytelling) an AI4Science work (in an interdisciplinary, less-recognized area) to public, industrial, or deep-learning-focusing judges.

Just meeting notes, so it's quite messy.

---

## Apr. 2025 for regional competition

- 为什么？数据少 -> 反绎，知识，解决数据规模小，应用积累的知识
- 模型对比 数据规模
- 问题引入，提出问题？，新技术提出 为何快速证明（iGEM金奖）？
- 验证：为本项目研究，“因为 验证，模型有用”，所以 取得好效果，展示成果：为了验证 项目技术有用


- 因果关系（生物学 主流方法 -> ...）
- 生物学 为什么数据少：成本 非常高！， 强调：模拟数据 GNN/GAN等，效果也不好，**主次分明**
- 强调 一个月 的时间 **快速**：可能被怀疑，直接明说

- 提及 国际合作，故事 完整
- +视频：20-30s

## Jun. 2025 after regional competition

国赛：
1. 认可程度，故事
2. 方法对比
3. 需要突出的**重点**，**为什么得到认可**
其他领域 可能经验，不同：强调（主要：数据少，成本高，-> 我们的方法 效果好 -> 认可 -> 合作，继续改进 **证明：‘项目很好’**）  
    领域知识：证明 应用前景

## Aug. 2025 before nation-wide competition

- 生物学背景？
	1. 理解生命体工作底层原理，生物医药应用（virtual cell, 模拟），非常重要 -> 可解释性
	2. 存在数据/知识质量问题
- 和ABL 关系？
	ABL：框架，
	引入新setting和解决方案：数据/知识，同时噪声

- 逻辑 说明白？
- 知识 为什么用？（突出 数据，黑盒）

- 竞赛？（iGEM，AI+）  
	AI辅助，周期短，实验结果比较理想  
	-> 生命科学方面
- 生物学应用？（希瓦氏菌）
	逻辑：
	1. 生物学现象，机制未知
	2. 生物研究：希望理解
	3. 预测结果+透明的预测路径 （一种可能的建议）
	4. 生物学验证：一致
- 第二阶段：作为问题，
	- 具体优化 / 进一步细化：是什么？，提高最终结果 & 生物学意义
- 论文：CCF-A在投

- 怎么想起做/**项目来源**？：...  
    **正好遇到问题 -> 该方法合适**
- 现有方法：细分领域，目前有哪些方法？：比较？，

- 有标签/无标签数据 区别/关系？（无标签，怎么用？只有特征数据，用知识进行推理）*空洞*？
- 第二次版本迭代
- 细化：主要在哪里？怎么建立合作关系？合作后，提供：认可&实验数据资源
- 细化了生物学应用问题，意义：提高模型表现，有更大的生物学意义
- 和国外实验室合作，实验验证方法有效性
- 改：生物学领域，获取一条准确的这种数据，需要2-3次实验，一次实验成本通常数万元，因此仅从互联网公开数据集获取100条数据。再加上4000条成本较低的无标签数据，结合知识库的信息进行推理，进行反绎学习训练，取得...好效果:
	1. 有标签数据贵
	2. 获取无标签数据
	3. 结合知识库 & ABL，用知识的信息
	4. 用了ABL后，效果好