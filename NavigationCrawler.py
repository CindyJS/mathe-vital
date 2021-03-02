# this script creates the YAML file '_data/navigation.yml' which is needed for the Navigation of the website
# Usage: run `python3 NavigationCrawler.py` in this folder.
import os
import yaml
project_folder = './'

# order is important.
categories = []
categories.append(('LinAlg1','Lineare Algebra 1'))
categories.append(('LinAlg2','Lineare Algebra 2'))
categories.append(('LinAlgBonbons','Lineare Algebra Bonbons'))
categories.append(('GeoCal','Geometriekalküle'))
categories.append(('Indras','Indras Pearls'))
categories.append(('Musik','Mathe und Musik'))
categories.append(('Botanik','Mathematik und Pflanzen'))
categories.append(('Analysis1','Analysis 1'))
categories.append(('DiffGeo','Differentialgeometrie'))
categories.append(('Diskrete','Diskrete Mathematik'))
categories.append(('Numerik','Numerische Mathematik'))
categories.append(('Physik','Physikalische Mathematik'))
categories

navigation = []
for c, category in enumerate(categories,1):
    folder = project_folder+category[0]
    navigation.append({'category': category[0], 'title': category[1], 'url': '/'+category[0], 'chapters': []})
    chapters = []
    for i in range(1,20):
        pagemd = str(i)+'-topic.md'
        pageurl = str(i)+'-topic.html'
        if pagemd in os.listdir(folder):
            with open(folder+'/'+pagemd) as f:
                for line in f:
                    if line.find('title:') != -1:
                        chapters.append({'title' : line.split(':')[1][1:-1], 'url': '/'+category[0]+'/'+pageurl, 'chapternr': i})
        elif pageurl in os.listdir(folder):
            with open(folder+'/'+pageurl) as f:
                for line in f:
                    if line.find('title:') != -1:
                        chapters.append({'title' : line.split(':')[1][1:-1], 'url': '/'+category[0]+'/'+pageurl, 'chapternr': i})
        topics = []
        for j in range(20):
            pagemd = str(i)+'-'+str(j)+'.md'
            pageurl = str(i)+'-'+str(j)+'.html'
            if pagemd in os.listdir(folder):
                with open(folder+'/'+pagemd) as f:
                    for line in f:
                        if line.find('title:') != -1:
                            topics.append({'title' : line.split(':')[1][1:-1], 'url': '/'+category[0]+'/'+pageurl})
                            chapters[-1]['topics'] = topics
            elif pageurl in os.listdir(folder):
                with open(folder+'/'+pageurl) as f:
                    for line in f:
                        if line.find('title:') != -1:
                            topics.append({'title' : line.split(':')[1][1:-1], 'url': '/'+category[0]+'/'+pageurl})
                            chapters[-1]['topics'] = topics 
        
        if folder == project_folder + 'GeoCal': # do it again for GeoCal E-chapters
            pagemd = 'E'+str(i)+'-topic.md'
            pageurl = 'E'+str(i)+'-topic.html'
            if pagemd in os.listdir(folder):
                with open(folder+'/'+pagemd) as f:
                    for line in f:
                        if line.find('title:') != -1:
                            chapters.append({'title' : line.split(':')[1][1:-1], 'url': '/'+category[0]+'/'+pageurl, 'chapternr': 'E'+str(i)})
            elif pageurl in os.listdir(folder):
                with open(folder+'/'+pageurl) as f:
                    for line in f:
                        if line.find('title:') != -1:
                            chapters.append({'title' : line.split(':')[1][1:-1], 'url': '/'+category[0]+'/'+pageurl, 'chapternr': 'E'+str(i)})
            topics = []
            for j in range(20):
                pagemd = 'E'+str(i)+'-'+str(j)+'.md'
                pageurl = 'E'+str(i)+'-'+str(j)+'.html'
                if pagemd in os.listdir(folder):
                    with open(folder+'/'+pagemd) as f:
                        for line in f:
                            if line.find('title:') != -1:
                                topics.append({'title' : line.split(':')[1][1:-1], 'url': '/'+category[0]+'/'+pageurl})
                                chapters[-1]['topics'] = topics
                elif pageurl in os.listdir(folder):
                    with open(folder+'/'+pageurl) as f:
                        for line in f:
                            if line.find('title:') != -1:
                                topics.append({'title' : line.split(':')[1][1:-1], 'url': '/'+category[0]+'/'+pageurl})
                                chapters[-1]['topics'] = topics
                                
        navigation[c-1]['chapters'] = chapters
        
        
navigation = {'Navigation': navigation}

with open(project_folder+'_data/navigation.yml', 'w') as yaml_file:
    yaml.dump(navigation, yaml_file, default_flow_style=False)
