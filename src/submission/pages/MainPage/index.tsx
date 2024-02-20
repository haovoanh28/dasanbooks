import {useState, SyntheticEvent, useEffect} from "react";
import {
  Container,
  Box,
  Stack,
  Tab,
  Grid,
  Typography,
  FormControl,
  InputAdornment,
  Input,
  Select,
  Button,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  SelectChangeEvent,
  AccordionProps,
  AccordionSummaryProps
} from "@mui/material";
import {
  Check,
  FileUploadOutlined,
  ExpandMore,
  AddCircleOutlineOutlined,
  RemoveCircleOutlineOutlined
} from "@mui/icons-material";
import {TabPanel, TabContext, TabList} from "@mui/lab";
import {styled} from "@mui/material/styles";
import {useGetCategory} from "../../hooks/useCategory";
import {SubmissionCategory} from "../../../types/common";

const HanAccordion = styled((props: AccordionProps) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
  backgroundColor: '#fff',
  '&::before': {
    display: 'none',
  },
}));

const HanAccordionExpandIcon = () => {
  return (
    <Box
      sx={{
        '.Mui-expanded & > .collapsIconWrapper': {
          display: 'none',
        },
        '.expandIconWrapper': {
          display: 'none',
        },
        '.Mui-expanded & > .expandIconWrapper': {
          display: 'block',
        },
      }}
    >
      <div className="expandIconWrapper">
        <RemoveCircleOutlineOutlined sx={{fontSize: '1.5rem'}}/>
      </div>
      <div className="collapsIconWrapper">
        <AddCircleOutlineOutlined sx={{fontSize: '1.5rem'}}/>
      </div>
    </Box>
  );
}

const HanAccordionSummary = styled((props: AccordionSummaryProps) => (
  <AccordionSummary
    expandIcon={<HanAccordionExpandIcon/>}
    {...props}
  />
))(({theme}) => ({
  backgroundColor: 'rgba(255, 255, 255, .05)',
  minHeight: '50px',
  flexDirection: 'row-reverse',
  borderBottom: '1px solid rgba(192, 204, 218, .5)',
  '&.Mui-expanded': {
    borderBottom: 'unset',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(0deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const HanAccordionDetails = styled(AccordionDetails)(({theme}) => ({
  padding: '16px 46px',
  backgroundColor: 'rgba(192, 204, 218, .5)',
  border: 'unset',
  borderRadius: '4px'
}));

const MainPage = () => {
  const [value, setValue] = useState('send_book_publish');
  const [age, setAge] = useState('0');

  const [bookCategories, setBookCategories] = useState<SubmissionCategory[]>([]);
  const [novelCategories, setNovelCategories] = useState<SubmissionCategory[]>([]);
  const [domainCategories, setDomainCategories] = useState<string[]>([]);

  const [bookSelected, setBookSelected] = useState<string | number>(0);
  const [novelSelected, setNovelSelected] = useState<string | number>(0);
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const {data: submissionData, isLoading} = useGetCategory();

  useEffect(() => {
    console.log('C: ', submissionData);
    const categories = submissionData?.rows?.categories;
    if(categories && categories.length === 2) {
      if(categories[0]?.rows && categories[0]?.rows.length > 0) {
        console.log('B: ', categories[0]);
        setBookCategories(categories[0]?.rows);
      }

      if(categories[1]?.rows && categories[1]?.rows.length > 0) {
        setNovelCategories(categories[1]?.rows);
      }
    }
    const domains = submissionData?.rows?.domains;
    if(domains && domains.length > 0) {
      setDomainCategories(domains);
    }
  }, [submissionData]);

  // useEffect(() => {
  //   if(!bookSelected && bookCategories) {
  //     let categories: any[] = [...bookSelected];
  //     categories.push(bookCategories[0].id);
  //     setBookCategories(categories);
  //   }
  // }, [categoriesData]);

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const handleSelectBook = (draftCategory: number | string) => {
    // use select multi categories
    // let categories = [...bookSelected];
    // if (!categories.some((cat: any) => {
    //   return cat == draftCategory;
    // })) {
    //   categories.push(draftCategory);
    // } else {
    //   categories.some((cat: any, i: number) => {
    //     if (cat == draftCategory) {
    //       categories.splice(i, 1);
    //     }
    //   });
    // }
    setBookSelected(draftCategory);
  }

  const handleSelectNovel = (draftCategory: number | string) => {
    // use select multi categories
    // let categories = [...novelSelected];
    // if (!categories.some((cat: any) => {
    //   return cat == draftCategory;
    // })) {
    //   categories.push(draftCategory);
    // } else {
    //   categories.some((cat: any, i: number) => {
    //     if (cat == draftCategory) {
    //       categories.splice(i, 1);
    //     }
    //   });
    // }
    setNovelSelected(draftCategory);
  }

  console.log('Book: ', bookCategories);

  const handleExpandChange = (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

   return (
     <>
       <Box sx={{mb: 2}}>
         <Typography
           sx={{
             fontSize: '36pt',
             fontWeight: 400,
             lineHeight: 1,
             mb: 2.5
           }}
         >
           원고 투고
         </Typography>
         <Typography
           sx={{
             fontSize: '13.5pt',
             fontWeight: 400,
             lineHeight: 1.25
           }}
         >
           다산은 저자 여러분의 투고를 기다리고 있습니다.<br/>
           간단한 개요와 취지를 담은 기획서와 샘플 원고를 보내 주세요.
         </Typography>
       </Box>
       <TabContext value={value}>
         <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
           <TabList
             onChange={handleChange}
             sx={{
               width: '100%',
               height: '62px',
               justifyContent: 'center',
               '& .MuiTabs-indicator': {
                 backgroundColor: '#2F54EB'
               }
             }}
           >
             <Tab label="단행본 투고 (출판)" value="send_book_publish" sx={{
               flex: '1 1 0%',
               width: '100%',
               maxWidth: 'unset',
               lineHeight: 2.715,
               color: '#1B2E4B',
               fontSize: '13.5pt',
               fontWeight: 600,
               '&.Mui-selected': {
                 color: '#2F54EB'
               }
             }}/>
             <Tab label="웹소설 투고 (디지털)" value="send_novel_digital" sx={{
               flex: '1 1 0%',
               width: '100%',
               maxWidth: 'unset',
               lineHeight: 2.715,
               color: '#1B2E4B',
               fontSize: '13.5pt',
               fontWeight: 600,
               '&.Mui-selected': {
                 color: '#2F54EB'
               }
             }}/>
           </TabList>
         </Box>
         <TabPanel key={'book'} value="send_book_publish" sx={{py: 2, px: 0}}>
           <Stack spacing={2} mt={2}>
             <Box>
               <Typography
                 sx={{
                   fontSize: '21pt',
                   fontWeight: 500,
                   lineHeight: 2,
                   color: '#1B2E4B'
                 }}
               >
                 저자 정보 *
               </Typography>
             </Box>
             <Box>
               <FormControl fullWidth variant="standard">
                 <Input
                   required
                   id="standard-required"
                   startAdornment={<InputAdornment position="start">원고 제목</InputAdornment>}
                   placeholder={'제목 또는 가제를 입력해주세요'}
                 ></Input>
               </FormControl>
             </Box>
             <Box
               display={'flex'}
               gap={2}
             >
               <FormControl variant="standard" sx={{flex: '1 1 0%'}}>
                 <Input
                   required
                   id="standard-adornment-weight"
                   startAdornment={<InputAdornment position="start">이름</InputAdornment>}
                   placeholder={'본명을 입력해주세요'}
                 />
               </FormControl>
               <FormControl variant="standard" sx={{flex: '1 1 0%'}}>
                 <Input
                   required
                   id="standard-adornment-weight"
                   startAdornment={<InputAdornment position="start">연락처</InputAdornment>}
                   placeholder={'휴대폰 번호를 입력해주세요'}
                 />
               </FormControl>
             </Box>
             <Box
               display={'flex'}
               gap={2}
             >
               <FormControl variant="standard" sx={{flex: '1 1 0%'}}>
                 <Input
                   required
                   id="standard-adornment-weight"
                   startAdornment={<InputAdornment position="start">연락처</InputAdornment>}
                   placeholder={'휴대폰 번호를 입력해주세요'}
                 />
               </FormControl>
               <FormControl variant="standard" sx={{flex: '1 1 0%'}}>
                 <Select
                   labelId="demo-simple-select-standard-label"
                   id="demo-simple-select-standard"
                   value={age}
                   onChange={handleSelectChange}
                 >
                   <MenuItem value={0}>
                     <Typography sx={{color: '#C0CCDA'}}>
                       선택
                     </Typography>
                   </MenuItem>
                   {domainCategories && domainCategories.length > 0 && domainCategories.map((domain: string) => {
                     return (
                       <MenuItem value={domain}>@{domain}</MenuItem>
                     );
                   })}
                 </Select>
               </FormControl>
             </Box>
           </Stack>
           <Stack spacing={2} mt={4}>
             <Box>
               <Typography
                 sx={{
                   fontSize: '21pt',
                   fontWeight: 500,
                   lineHeight: 2,
                   color: '#1B2E4B'
                 }}
               >
                 원고 분야 *
               </Typography>
             </Box>
             <Box>
               <Grid container rowSpacing={2} columnSpacing={2}>
                 {bookCategories && bookCategories.length > 0 && bookCategories.map((draft: any, index: number) => {
                   return (
                     <Grid key={draft.id} item>
                       <Button
                         key={draft.id}
                         variant="outlined"
                         startIcon={<Check/>}
                         sx={{
                           minWidth: '130px',
                           minHeight: '44px',
                           color: bookSelected == draft.id ? '#FFF' : '#1B2E4B',
                           backgroundColor: bookSelected == draft.id ? '#2F54EB' : 'transparent',
                           borderColor: bookSelected == draft.id ? '#2F54EB' : '#C0CCDA',
                           '&:hover': {
                             color: '#FFF',
                             backgroundColor: '#0168FA'
                           }
                         }}
                         onClick={() => handleSelectBook(draft.id)}
                       >
                         {draft.name}
                       </Button>
                     </Grid>
                   );
                 })}
               </Grid>
             </Box>
           </Stack>
           <Stack spacing={2} mt={4}>
             <Box>
               <Typography
                 sx={{
                   fontSize: '21pt',
                   fontWeight: 500,
                   lineHeight: 2,
                   color: '#1B2E4B'
                 }}
               >
                 기획서와 원고를 아래에 첨부해 주세요 *
               </Typography>
             </Box>
             <Box>
               <TextField
                 fullWidth
                 multiline
                 id="outlined-multiline-static"
                 rows={10}
                 placeholder={'투고 내용에 대해 간략한 소개를 부탁드립니다. 작가 정보, 타겟 독자, 출간 이력, 보유 채널 등 담당자가 원고 검토 시 참고했으면 하는 정보를 기재해주십시오.'}
               />
             </Box>
             <Box display={'flex'} gap={2}>
               <Box sx={{flex: '1 1 0%'}}>
                 <Button
                   fullWidth
                   variant="outlined"
                   startIcon={<FileUploadOutlined/>}
                   sx={{
                     minHeight: '42px',
                     color: '#1B2E4B',
                     borderColor: '#C0CCDA',
                     '&:hover': {
                       borderColor: '#BBC7D4',
                       backgroundColor: 'rgb(192, 204, 218, 0.4)'
                     }
                   }}
                 >
                   기획서 첨부 (선택)
                 </Button>
               </Box>
               <Box sx={{flex: '1 1 0%'}}>
                 <Button
                   fullWidth
                   variant="outlined"
                   startIcon={<FileUploadOutlined/>}
                   sx={{
                     minHeight: '42px',
                     color: '#1B2E4B',
                     borderColor: '#C0CCDA',
                     '&:hover': {
                       borderColor: '#BBC7D4',
                       backgroundColor: 'rgb(192, 204, 218, 0.2)'
                     }
                   }}
                 >
                   원고 첨부 (필수)
                 </Button>
               </Box>
             </Box>
           </Stack>
           <Stack spacing={2} mt={4}>
             <Box display={'flex'} gap={2}>
               <Box sx={{flex: '1 1 0%'}}>
                 <FormControl fullWidth variant="standard">
                   <Input
                     required
                     id="standard-required"
                     startAdornment={<InputAdornment position="start">보안코드</InputAdornment>}
                     placeholder={'오른쪽에 보여지는 코드를 입력해주세요'}
                   ></Input>
                 </FormControl>
               </Box>
               <Box sx={{display: 'flex', flex: '1 1 0%', alignItems: 'center'}}>
                 <Typography sx={{fontSize: '20pt'}}>
                   CAPTCHA
                 </Typography>
               </Box>
             </Box>
           </Stack>

           <Stack spacing={2} mt={6}>
             <Box>
               <Typography
                 sx={{
                   fontSize: '21pt',
                   fontWeight: 500,
                   lineHeight: 2,
                   color: '#1B2E4B'
                 }}
               >
                 개인정보 처리방침 동의
               </Typography>
             </Box>
             <Box py={0.625} px={1.5} sx={{minHeight: '150px', border: '1px solid #C0CCDA', borderRadius: '4px'}}>
               <Typography
                 sx={{
                   fontSize: '10pt',
                   fontWeight: 600,
                   lineHeight: 2
                 }}
               >
                 개인정보 수집 및 이용 동의
               </Typography>
               <Typography
                 sx={{
                   fontSize: '10pt',
                   fontWeight: 400,
                   lineHeight: 1.6
                 }}
               >
                 - 처리목적 : 투고 원고 접수 및 검토, 투고 이력 관리, 저자 연락 등<br/>
                 - 처리(수집) 항목 : 이름, 연락처, 이메일<br/>
                 - 보유기간 : 목적 달성 시까지<br/>
                 *상기의 개인정보 수집 및 이용을 거부하실 수 있으나, 거부하시는 경우 투고 원고 접수 및 검토가 불가합니다.
               </Typography>
             </Box>
             <Box sx={{display: 'flex', justifyContent: 'right', mt: '0 !important'}}>
               <FormControlLabel control={<Checkbox/>} label="개인정보처리방침에 동의합니다." sx={{mr: 0}}/>
             </Box>
             <Box sx={{display: 'flex', justifyContent: 'center', pt: 4}}>
               <Typography
                 sx={{
                   fontSize: '13.5pt',
                   fontWeight: 500,
                   textAlign: 'center',
                   lineHeight: 1.8
                 }}
               >
                 투고하신 원고의 검토 기간은 1~2개월 가량 소요되며, 채택된 원고에 한 해 담당자가 연락드립니다.<br/>
                 원고 투고 관련한 문의 사항은 <b>dasanbooks@dasanbooks.com</b> 으로 남겨주시기 바랍니다.<br/>
                 (전화 문의는 받지 않습니다.)
               </Typography>
             </Box>
           </Stack>
           <Stack spacing={2} mt={4}>
             <Box sx={{display: 'flex', justifyContent: 'center'}}>
               <Button
                 variant="outlined"
                 sx={{
                   minWidth: '150px',
                   minHeight: '55px',
                   fontSize: '12pt',
                   color: '#2F54EB',
                   borderColor: '#2F54EB',
                   '&:hover': {
                     color: '#274DE7',
                     borderColor: '#274DE7',
                     backgroundColor: 'rgb(47, 84, 235, 0.1)'
                   }
                 }}
               >
                 자기계발
               </Button>
             </Box>
           </Stack>
         </TabPanel>
         <TabPanel key={'novel'} value="send_novel_digital" sx={{py: 2, px: 0}}>
           <Stack spacing={2} mt={2}>
             <Box>
               <Typography
                 sx={{
                   fontSize: '21pt',
                   fontWeight: 500,
                   lineHeight: 2,
                   color: '#1B2E4B'
                 }}
               >
                 저자 정보 *
               </Typography>
             </Box>
             <Box>
               <FormControl fullWidth variant="standard">
                 <Input
                   required
                   id="standard-required"
                   startAdornment={<InputAdornment position="start">원고 제목</InputAdornment>}
                   placeholder={'제목 또는 가제를 입력해주세요'}
                 ></Input>
               </FormControl>
             </Box>
             <Box
               display={'flex'}
               gap={2}
             >
               <FormControl variant="standard" sx={{flex: '1 1 0%'}}>
                 <Input
                   required
                   id="standard-adornment-weight"
                   startAdornment={<InputAdornment position="start">이름</InputAdornment>}
                   placeholder={'본명을 입력해주세요'}
                 />
               </FormControl>
               <FormControl variant="standard" sx={{flex: '1 1 0%'}}>
                 <Input
                   required
                   id="standard-adornment-weight"
                   startAdornment={<InputAdornment position="start">연락처</InputAdornment>}
                   placeholder={'휴대폰 번호를 입력해주세요'}
                 />
               </FormControl>
             </Box>
             <Box
               display={'flex'}
               gap={2}
             >
               <FormControl variant="standard" sx={{flex: '1 1 0%'}}>
                 <Input
                   required
                   id="standard-adornment-weight"
                   startAdornment={<InputAdornment position="start">연락처</InputAdornment>}
                   placeholder={'휴대폰 번호를 입력해주세요'}
                 />
               </FormControl>
               <FormControl variant="standard" sx={{flex: '1 1 0%'}}>
                 <Select
                   labelId="demo-simple-select-standard-label"
                   id="demo-simple-select-standard"
                   value={age}
                   onChange={handleSelectChange}
                 >
                   <MenuItem value={0}>
                     <Typography sx={{color: '#C0CCDA'}}>
                       선택
                     </Typography>
                   </MenuItem>
                   <MenuItem value={10}>Ten</MenuItem>
                   <MenuItem value={20}>Twenty</MenuItem>
                   <MenuItem value={30}>Thirty</MenuItem>
                 </Select>
               </FormControl>
             </Box>
           </Stack>
           <Stack spacing={2} mt={4}>
             <Box>
               <Typography
                 sx={{
                   fontSize: '21pt',
                   fontWeight: 500,
                   lineHeight: 2,
                   color: '#1B2E4B'
                 }}
               >
                 원고 분야 *
               </Typography>
             </Box>
             <Box>
               <Grid container rowSpacing={2} columnSpacing={2}>
                 {novelCategories && novelCategories.length > 0 && novelCategories.map((draft: any, index: number) => {
                   return (
                     <Grid key={draft.id} item>
                       <Button
                         key={draft.id}
                         variant="outlined"
                         startIcon={<Check/>}
                         sx={{
                           minWidth: '130px',
                           minHeight: '44px',
                           color: novelSelected == draft.id ? '#FFF' : '#1B2E4B',
                           backgroundColor: novelSelected == draft.id ? '#2F54EB' : '',
                           borderColor: novelSelected == draft.id ? '#2F54EB' : '#C0CCDA',
                           '&:hover': {
                             color: '#1B2E4B'
                           }
                         }}
                         onClick={() => handleSelectNovel(draft.id)}
                       >
                         {draft.name}
                       </Button>
                     </Grid>
                   );
                 })}
               </Grid>
             </Box>
           </Stack>
           <Stack spacing={2} mt={4}>
             <Box>
               <Typography
                 sx={{
                   fontSize: '21pt',
                   fontWeight: 500,
                   lineHeight: 2,
                   color: '#1B2E4B'
                 }}
               >
                 출간 이력이 있으신가요? *
               </Typography>
             </Box>
             <Box>
               <TextField
                 fullWidth
                 multiline
                 id="outlined-multiline-static"
                 rows={5}
                 placeholder={'출간 이력이 있다면 이곳에 기재해주세요.'}
               />
             </Box>
           </Stack>
           <Stack spacing={2} mt={4}>
             <Box>
               <Typography
                 sx={{
                   fontSize: '21pt',
                   fontWeight: 500,
                   lineHeight: 2,
                   color: '#1B2E4B'
                 }}
               >
                 기획서와 원고를 아래에 첨부해 주세요 *
               </Typography>
             </Box>
             <Box>
               <TextField
                 fullWidth
                 multiline
                 id="outlined-multiline-static"
                 rows={10}
                 placeholder={'투고 내용에 대해 간략한 소개를 부탁드립니다. 작가 정보, 타겟 독자, 출간 이력, 보유 채널 등 담당자가 원고 검토 시 참고했으면 하는 정보를 기재해주십시오.'}
               />
             </Box>
             <Box display={'flex'} gap={2}>
               <Box sx={{flex: '1 1 0%'}}>
                 <Button
                   fullWidth
                   variant="outlined"
                   startIcon={<FileUploadOutlined/>}
                   sx={{
                     minHeight: '42px',
                     color: '#1B2E4B',
                     borderColor: '#C0CCDA',
                     '&:hover': {
                       borderColor: '#BBC7D4',
                       backgroundColor: 'rgb(192, 204, 218, 0.4)'
                     }
                   }}
                 >
                   기획서 첨부 (선택)
                 </Button>
               </Box>
               <Box sx={{flex: '1 1 0%'}}>
                 <Button
                   fullWidth
                   variant="outlined"
                   startIcon={<FileUploadOutlined/>}
                   sx={{
                     minHeight: '42px',
                     color: '#1B2E4B',
                     borderColor: '#C0CCDA',
                     '&:hover': {
                       borderColor: '#BBC7D4',
                       backgroundColor: 'rgb(192, 204, 218, 0.2)'
                     }
                   }}
                 >
                   원고 첨부 (필수)
                 </Button>
               </Box>
             </Box>
           </Stack>
           <Stack spacing={2} mt={4}>
             <Box>
               <Typography
                 sx={{
                   fontSize: '21pt',
                   fontWeight: 500,
                   lineHeight: 2,
                   color: '#1B2E4B'
                 }}
               >
                 출간 이력이 있으신가요? *
               </Typography>
             </Box>
             <Box>
               <FormControl>
                 <RadioGroup row name="published-history">
                   <FormControlLabel value="adult" control={<Radio/>} label="아니오, 성인입니다."/>
                   <FormControlLabel value="minor" control={<Radio/>} label="예, 미성년자입니다."/>
                 </RadioGroup>
               </FormControl>
             </Box>
           </Stack>
           <Stack spacing={2} mt={6}>
             <Box display={'flex'} gap={2}>
               <Box sx={{flex: '1 1 0%'}}>
                 <FormControl fullWidth variant="standard">
                   <Input
                     required
                     id="standard-required"
                     startAdornment={<InputAdornment position="start">보안코드</InputAdornment>}
                     placeholder={'오른쪽에 보여지는 코드를 입력해주세요'}
                   ></Input>
                 </FormControl>
               </Box>
               <Box sx={{display: 'flex', flex: '1 1 0%', alignItems: 'center'}}>
                 <Typography sx={{fontSize: '20pt'}}>
                   CAPTCHA
                 </Typography>
               </Box>
             </Box>
           </Stack>
           <Stack spacing={2} mt={6}>
             <Box>
               <Typography
                 sx={{
                   fontSize: '21pt',
                   fontWeight: 500,
                   lineHeight: 2,
                   color: '#1B2E4B'
                 }}
               >
                 개인정보 처리방침 동의
               </Typography>
             </Box>
             <Box py={0.625} px={1.5} sx={{minHeight: '150px', border: '1px solid #C0CCDA', borderRadius: '4px'}}>
               <Typography
                 sx={{
                   fontSize: '10pt',
                   fontWeight: 600,
                   lineHeight: 2
                 }}
               >
                 개인정보 수집 및 이용 동의
               </Typography>
               <Typography
                 sx={{
                   fontSize: '10pt',
                   fontWeight: 400,
                   lineHeight: 1.6
                 }}
               >
                 - 처리목적 : 투고 원고 접수 및 검토, 투고 이력 관리, 저자 연락 등<br/>
                 - 처리(수집) 항목 : 이름, 연락처, 이메일<br/>
                 - 보유기간 : 목적 달성 시까지<br/>
                 *상기의 개인정보 수집 및 이용을 거부하실 수 있으나, 거부하시는 경우 투고 원고 접수 및 검토가 불가합니다.
               </Typography>
             </Box>
             <Box sx={{display: 'flex', justifyContent: 'right', mt: '0 !important'}}>
               <FormControlLabel control={<Checkbox/>} label="개인정보처리방침에 동의합니다." sx={{mr: 0}}/>
             </Box>
             <Box sx={{display: 'flex', justifyContent: 'center', pt: 4}}>
               <Typography
                 sx={{
                   fontSize: '13.5pt',
                   fontWeight: 500,
                   textAlign: 'center',
                   lineHeight: 1.8
                 }}
               >
                 투고하신 원고 접수 시 확인 메일을 회신드리며,<br/>
                 담당자 배정 및 검토 후 2주일 내에 출간 가부를 안내 드립니다.<br/>
                 웹소설 투고 관련해 궁금하신 사항은<br/>
                 <b>ebook@dasanbooks.com</b> 으로 연락주시기 바랍니다
               </Typography>
             </Box>
           </Stack>
           <Stack spacing={2} mt={4}>
             <Box sx={{display: 'flex', justifyContent: 'center'}}>
               <Button
                 variant="outlined"
                 sx={{
                   minWidth: '150px',
                   minHeight: '55px',
                   fontSize: '12pt',
                   color: '#2F54EB',
                   borderColor: '#2F54EB',
                   '&:hover': {
                     color: '#274DE7',
                     borderColor: '#274DE7',
                     backgroundColor: 'rgb(47, 84, 235, 0.1)'
                   }
                 }}
               >
                 자기계발
               </Button>
             </Box>
           </Stack>
           <Stack spacing={2} mt={6}>
             <Box>
               <Typography
                 sx={{
                   fontSize: '21pt',
                   fontWeight: 500,
                   lineHeight: 2,
                   color: '#1B2E4B'
                 }}
               >
                 저자 정보 *
               </Typography>
             </Box>
             <Box>
               <HanAccordion expanded={expanded === 'panel1'} onChange={handleExpandChange('panel1')}>
                 <HanAccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                   <Typography>웹소설 투고 시 정해진 양식이나 원고 분량에 대한 기준이 있나요?</Typography>
                 </HanAccordionSummary>
                 <HanAccordionDetails>
                   <Typography>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                     malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                     sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                     sit amet blandit leo lobortis eget.
                   </Typography>
                 </HanAccordionDetails>
               </HanAccordion>
               <HanAccordion expanded={expanded === 'panel2'} onChange={handleExpandChange('panel2')}>
                 <HanAccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                   <Typography>웹소설 투고 시 정해진 양식이나 원고 분량에 대한 기준이 있나요?</Typography>
                 </HanAccordionSummary>
                 <HanAccordionDetails>
                   <Typography>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                     malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                     sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                     sit amet blandit leo lobortis eget.
                   </Typography>
                 </HanAccordionDetails>
               </HanAccordion>
               <HanAccordion expanded={expanded === 'panel3'} onChange={handleExpandChange('panel3')}>
                 <HanAccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                   <Typography>웹소설 투고 시 정해진 양식이나 원고 분량에 대한 기준이 있나요?</Typography>
                 </HanAccordionSummary>
                 <HanAccordionDetails>
                   <Typography>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                     malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                     sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                     sit amet blandit leo lobortis eget.
                   </Typography>
                 </HanAccordionDetails>
               </HanAccordion>
             </Box>
           </Stack>
         </TabPanel>
       </TabContext>
     </>
   );
 };
 
 export default MainPage;
 