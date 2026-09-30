import type { Anemia } from '../../types/anemia';

export const autoimmuneHemolyticAnemia: Anemia = {
  id: 'autoimmune-hemolytic-anemia',
  name: 'Autoimmune Hemolytic Anemia (AIHA)',
  altNames: [
    'Warm antibody hemolytic anemia (most common form)',
    'cold agglutinin disease (cold antibody disease)',
    'paroxysmal cold hemoglobinuria (PCH; Donath-Landsteiner syndrome) \u2014 rare subtype',
  ],
  definition:
    'Group of disorders characterized by malfunction of the immune system, resulting in production of autoantibodies that attack red blood cells as if they were substances foreign to the body.',
  branches: ['normocytic', 'hemolytic', 'acquired'],
  inheritedOrAcquired: 'acquired',
  cause:
    'Caused by autoantibodies that react with red blood cells at temperatures \u2265 37\u00b0 C (warm antibody hemolytic anemia) or < 37\u00b0 C (cold agglutinin disease). Hemolysis is predominantly extravascular.\n\nWarm antibody hemolytic anemia (most common form of AIHA):\n- Autoantibodies react at temperatures \u2265 37\u00b0 C\n- Classified as Primary (idiopathic) or Secondary (occurring in association with an underlying disorder such as systemic lupus erythematosus, lymphoma, or chronic lymphocytic leukemia, or after use of certain medications)\n- Some medications (eg, methyldopa, levodopa) stimulate production of autoantibodies against Rh antigens (methyldopa-type of AIHA)\n- Other medications stimulate production of autoantibodies against an antibiotic\u2013RBC-membrane complex as part of a transient hapten mechanism; the hapten may be stable (eg, high-dose penicillin, cephalosporins) or unstable (eg, quinidine, sulfonamides)\n\nCold agglutinin disease:\n- Caused by autoantibodies that react at temperatures < 37\u00b0 C; some autoantibodies have a higher thermal amplitude (eg, > 30\u00b0 C most likely to cause clinical manifestations)\n- Antibody thermal amplitude is more important than its titer\n- Primary or idiopathic: usually associated with a monoclonal B-cell population in individuals considered to have a low-grade lymphoproliferative disorder; antibodies usually directed against the I antigen\n- Secondary cold agglutinin syndrome: occurs in the setting of an underlying disorder such as infections (especially mycoplasmal pneumonias or infectious mononucleosis, with antibodies directed against the I [mycoplasma] or i [Epstein-Barr virus] antigens) or an overt lymphoma\n- Infections tend to cause acute disease; idiopathic disease (the common form in older adults) tends to be chronic\n\nParoxysmal cold hemoglobinuria (PCH):\n- Rare type of cold reactive AIHA; more common in children\n- Hemolysis results from exposure to cold, which may even be localized (eg, from drinking cold water, from washing hands in cold water)\n- An IgG antibody binds to the P antigen on RBCs at low temperatures and causes intravascular hemolysis and hemoglobinuria after warming\n- Occurs most often after a nonspecific viral illness or in otherwise healthy patients, although it occurs in some patients with congenital or acquired syphilis',
  pathophysiology:
    'Autoimmune hemolytic anemia is caused by abnormalities extrinsic to the red blood cell.\n\nWarm antibody hemolytic anemia: Hemolysis occurs primarily in the spleen and is not due to direct lysis of RBCs. It may be severe and can be fatal. Most of the autoantibodies are IgG. Most are polyclonal panagglutinins against common RBC antigens.\n\nCold agglutinin disease: The chronic hemolysis occurs largely in the extravascular mononuclear phagocyte system of the liver and spleen, but intravascular hemolysis can occur when a complement-amplifying condition, such as infection, is present. The anemia is usually non-severe. Autoantibodies in cold agglutinin disease are almost always clonal IgM.\n\nParoxysmal cold hemoglobinuria: IgG antibody binds to the P antigen on RBCs at low temperatures and causes intravascular hemolysis and hemoglobinuria after warming. The severity and rapidity of development of the anemia varies and may be fulminant.',
  cbc: [
    {
      label: 'MCV',
      value:
        'Normocytic; a high MCV may occur due to extreme reticulocytosis or agglutination in cold agglutinin disease',
    },
    {
      label: 'Reticulocyte count',
      value:
        'High (reticulocytosis) in warm AIHA and cold agglutinin disease; in cold agglutinin disease when unwarmed blood is used, automated cell counts often reveal an increased MCV and spuriously low hemoglobin due to RBC clumping (hand warming of the tube and recounting results in values significantly closer to normal)',
      direction: 'up',
    },
    {
      label: 'Hemoglobin',
      value: 'Decreased; may be spuriously low in cold agglutinin disease due to clumping',
      direction: 'down',
    },
  ],
  smear: [
    'Spherocytes (microspherocytes): Usually seen in warm AIHA; spherical red blood cells without an area of central pallor, usually slightly smaller than the average red cell; have increased osmotic fragility',
    'Few or no schistocytes: In warm AIHA, indicating extravascular hemolysis',
    'RBC clumping: In cold agglutinin disease when unwarmed blood is used, RBCs clump on the peripheral smear',
  ],
  labs: [
    {
      label: 'Direct antiglobulin (direct Coombs) test',
      value: 'Positive; establishes the diagnosis and may suggest the cause',
      note: 'In warm antibody hemolytic anemia, IgG is nearly always present, and C3 (C3b and C3d) may be present as well. In cold antibody disease, C3 is present while IgG is usually absent. Three patterns are possible: (1) positive with anti-IgG and negative with anti-C3 \u2014 common in idiopathic AIHA and drug-associated/methyldopa-type AIHA (usually warm); (2) positive with anti-IgG and anti-C3 \u2014 common in SLE and idiopathic AIHA (usually warm); rare in drug-associated cases; (3) positive with anti-C3 but negative with anti-IgG \u2014 occurs in cold agglutinin disease (antibody most commonly IgM); can also occur in warm AIHA when the IgG antibody is of low affinity, in some drug-associated cases, and in PCH.',
    },
    {
      label: 'Indirect antiglobulin (indirect Coombs) test',
      value:
        'Complementary; a positive indirect test and negative direct test generally indicate an alloantibody caused by pregnancy, prior transfusions, or lectin cross-reactivity rather than immune hemolysis',
    },
    { label: 'LDH', value: 'Elevated (hemolysis)', direction: 'up' },
    { label: 'Indirect bilirubin', value: 'Elevated (hemolysis)', direction: 'up' },
    { label: 'Haptoglobin', value: 'Decreased (hemolysis)', direction: 'down' },
    {
      label: 'Cold agglutinin titer',
      value:
        'A titer of 1:64 is typically part of the diagnosis, though usually titers are higher and occasionally the disease is diagnosed at lower titers',
    },
    {
      label: 'Thermal amplitude testing (cold agglutinin disease)',
      value:
        'Measures the temperature range in which a cold autoantibody binds to its antigen; cold antibodies that can bind to antigen above 28 to 30\u00b0 C are considered potentially clinically significant',
    },
    {
      label: 'Donath-Landsteiner test (if PCH suspected)',
      value:
        'Specific for PCH; patient\u2019s serum is incubated with normal RBCs at 4\u00b0 C for 30 minutes to allow fixation of complement, then warmed to body temperature; hemolysis of RBCs during this test is indicative of PCH',
    },
    {
      label: 'Important caveats',
      value:
        'The direct antiglobulin test is highly sensitive for AIHA with an estimated ~5% of AIHA cases being direct antiglobulin test-negative (false-negative results can occur if antibody density is very low or, rarely, if the autoantibodies are IgA). The direct antiglobulin test may also be positive in the absence of AIHA (false-positive results may result from clinically insignificant antibodies, elevated paraproteins, IV immune globulin, RhD immunoglobulin, daratumumab therapy, or alloantibodies after recent transfusion and delayed hemolytic transfusion reaction). Approximately 1/10,000 healthy blood donors has a positive test result.',
    },
  ],
  diagnosis:
    'Autoimmune hemolytic anemia should be suspected in any patient with a hemolytic anemia (as suggested by the presence of anemia and reticulocytosis).\n\nDiagnostic tests include: Peripheral smear, reticulocyte count, lactate dehydrogenase (LDH), haptoglobin, indirect bilirubin, direct antiglobulin test. Cold agglutinin titer and thermal amplitude testing in cold agglutinin disease.\n\nIn warm autoimmune hemolytic anemia, the peripheral smear usually shows microspherocytes and a high reticulocyte count with few or no schistocytes, indicating extravascular hemolysis. Laboratory tests typically indicate hemolysis (eg, elevated LDH and indirect bilirubin and decreased haptoglobin).\n\nThe presence of abundant spherocytes in the peripheral blood smear suggests either hereditary spherocytosis (HS) or autoimmune hemolytic anemia (AIHA). The osmotic fragility test is positive in both HS and AIHA. The direct antiglobulin (Coombs) test distinguishes between them; the result is positive in AIHA and negative in HS.\n\nOnce AIHA has been identified by the antiglobulin test, testing should differentiate between warm antibody hemolytic anemia and cold agglutinin disease as well as the mechanism responsible for warm antibody hemolytic anemia. This determination can often be made by observing the pattern of the direct antiglobulin reaction.\n\nOther tests can suggest the cause of AIHA but are not definitive. In cold agglutinin disease, when unwarmed blood is used, RBCs clump on the peripheral smear and automated cell counts often reveal an increased MCV and spuriously low hemoglobin.\n\nHemolytic anemia in the setting of a low reticulocyte count is rare but can occur due to factors such as renal insufficiency, infection, or bone marrow failure and constitutes a medical emergency requiring prompt transfusions.',
  clinicalFeatures: {
    general: [
      'Some people have no symptoms, especially when destruction is mild and develops gradually',
      'Fatigue, weakness, paleness (similar to other types of anemia)',
      'Symptoms of severe or rapid destruction may include jaundice, fever, chest pain, fainting, symptoms of heart failure (eg, shortness of breath), and even death',
    ],
    specific: [
      'Warm antibody hemolytic anemia: Symptoms tend to be due to the anemia',
      'Warm antibody hemolytic anemia (if severe): fever, chest pain, syncope, or liver or heart failure may occur',
      'Warm antibody hemolytic anemia: Mild splenomegaly is typical',
      'Warm antibody hemolytic anemia: Venous thromboembolic events are common',
      'Cold agglutinin disease: Manifests as an acute or chronic hemolytic anemia',
      'Cold agglutinin disease: Acrocyanosis, Raynaud phenomenon, cold-associated occlusive changes',
      'Cold agglutinin disease: In the hands and feet, may appear bluish or grayish, develop ulcers, and become painful',
      'Cold agglutinin disease: Associated with elevated thrombotic risk',
      'Paroxysmal cold hemoglobinuria: Severe pain in the back and legs, headache, vomiting, diarrhea, passage of dark brown urine',
      'Paroxysmal cold hemoglobinuria: Hepatosplenomegaly may be present',
      'Paroxysmal cold hemoglobinuria: In children, this disease is often self-resolving',
      'When caused by another disorder: Symptoms of the underlying disorder (eg, swollen and tender lymph nodes or fever) may dominate',
    ],
  },
  treatment: [
    'Blood transfusion: Most important treatment for patients who have symptoms and who rapidly develop severe, life-threatening anemia; should never be withheld due to lack of "compatible" units. In general, patients who have not had a previous blood transfusion or been pregnant are at low risk for hemolysis of ABO-compatible blood. Even if transfused cells are hemolyzed, blood transfusion can be life-saving until more definitive therapy can be done.',
    'For drug-induced warm antibody hemolytic anemia: Drug withdrawal and sometimes IV immune globulin (IVIG)',
    'For idiopathic warm antibody hemolytic anemia: Glucocorticoids (eg, prednisone \u2014 high doses at first, followed by gradual reduction over many weeks or months); in refractory cases, rituximab, IVIG, immunosuppression (eg, with azathioprine, mycophenolate mofetil, or cyclophosphamide), or splenectomy',
    'For cold agglutinin disease: Avoidance of cold and treatment of underlying disorder; sometimes rituximab with or without chemotherapy, or complement inhibitors',
    'For PCH: Avoidance of cold, immunosuppressants, and treatment of syphilis if present. In children, this disease is often self-resolving.',
    'Erythropoietin: May be given if the reticulocyte response is inadequate',
    'Splenectomy rationale: The spleen is removed because it is the primary place where antibody-coated red blood cells are destroyed',
  ],
  keyClues: [
    'Positive direct antiglobulin (Coombs) test',
    'Spherocytes on peripheral smear (warm AIHA)',
    'Elevated LDH + elevated indirect bilirubin + decreased haptoglobin (hemolysis)',
    'Reticulocytosis (unless concomitant marrow failure/renal insufficiency/infection)',
    'Negative direct antiglobulin test distinguishes from hereditary spherocytosis (which also has spherocytes and positive osmotic fragility)',
    'Cold agglutinin disease: RBC clumping on smear, acrocyanosis, Raynaud phenomenon, high MCV (spurious)',
    'PCH: Donath-Landsteiner test positive; dark brown urine after cold exposure; IgG against P antigen',
  ],
  source:
    'Merck Manual \u2014 Autoimmune Hemolytic Anemia (Professional, Apr 2026; Consumer, Apr 2024)',
};
