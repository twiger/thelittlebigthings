import codecs, json
import openpyxl
import re

wb = openpyxl.load_workbook('career_relationship.xlsx', data_only=True)
response = wb['Response']
career_relationship = {}
data = []
item_name = ['time', 'name', 'email', 'sign', 'position', 'orgnization', 'org_sign', 'exp_years', 'certification', 'prof_ability', 'industry_status', 'sug_to_high_school_stu', 'major', 'related_to_major', 'ability_from_major', 'job_based_on_major', 'sug_to_reader', 'education', 'groupby_school', 'groupby_department', 'groupby_job' ]

for idx, row in enumerate(response.rows):
	if idx != 0:
		item = []
		for cell in row:
			#print cell.value
			item.append(cell.value)
		item[0] = str(item[0])
		item[0] = item[0][:10]
		per_person = {k: v for k, v in zip(item_name, item)}
		edu = u'{0}'.format(per_person['education'])
		if re.search(u'\u6210\u5927', edu) or re.search(u'\u6210\u529f\u5927\u5b78', edu) or re.search(u'NCKU', edu) or re.search(u'National Cheng Kung University', edu):
			#print "yes"
			per_person['is_ncku'] = True
		else:
			#print "no"
			per_person['is_ncku'] = False
		data.append(per_person)
print len(data)
career_relationship['data'] = data

with codecs.open('career_relationship.json', 'w', 'utf8') as f:
	f.write(json.dumps(career_relationship, sort_keys = True, ensure_ascii=False,indent=4, separators=(',', ':')))
