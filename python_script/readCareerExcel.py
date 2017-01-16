import codecs, json
import openpyxl

wb = openpyxl.load_workbook('career_relationship.xlsx', data_only=True)
response = wb['Response']
career_relationship = {}
data = []
item_name = ['time', 'name', 'email', 'sign', 'position', 'orgnization', 'org_sign', 'exp_years', 'certification', 'prof_ability', 'industry_status', 'sug_to_high_school_stu', 'major', 'related_to_major', 'ability_from_major', 'job_based_on_major', 'sug_to_reader', 'education', 'groupby_major', 'groupby_job'  ]

for idx, row in enumerate(response.rows):
	if idx != 0:
		item = []
		for cell in row:
			#print cell.value
			item.append(cell.value)
		item[0] = str(item[0])
		per_person = {k: v for k, v in zip(item_name, item)}
		data.append(per_person)

career_relationship['data'] = data

with codecs.open('career_relationship.json', 'w', 'utf8') as f:
     f.write(json.dumps(career_relationship, sort_keys = True, ensure_ascii=False))
		
			
