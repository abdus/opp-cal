let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/Dev/personal/opp-cal__personal
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +40 pages/index.tsx
badd +34 ~/Dev/personal/opp-cal__personal/components/FileUpload/index.tsx
badd +7 ~/Dev/personal/opp-cal__personal/components/FileUpload/file-upload.module.css
badd +40 styles/Submit.module.css
badd +43 components/OpportunityCard/index.tsx
argglobal
%argdel
edit ~/Dev/personal/opp-cal__personal/components/FileUpload/index.tsx
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd w
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 79 + 119) / 239)
exe '2resize ' . ((&lines * 1 + 24) / 49)
exe 'vert 2resize ' . ((&columns * 79 + 119) / 239)
exe '3resize ' . ((&lines * 44 + 24) / 49)
exe 'vert 3resize ' . ((&columns * 79 + 119) / 239)
exe '4resize ' . ((&lines * 23 + 24) / 49)
exe 'vert 4resize ' . ((&columns * 79 + 119) / 239)
exe '5resize ' . ((&lines * 22 + 24) / 49)
exe 'vert 5resize ' . ((&columns * 79 + 119) / 239)
argglobal
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=4
setlocal fml=1
setlocal fdn=20
setlocal fen
14
normal! zo
19
normal! zo
31
normal! zo
48
normal! zo
49
normal! zo
51
normal! zo
52
normal! zo
54
normal! zo
57
normal! zo
60
normal! zo
66
normal! zo
69
normal! zo
74
normal! zo
77
normal! zo
81
normal! zo
82
normal! zo
86
normal! zo
let s:l = 39 - ((33 * winheight(0) + 23) / 46)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
39
normal! 07|
wincmd w
argglobal
if bufexists("~/Dev/personal/opp-cal__personal/components/FileUpload/file-upload.module.css") | buffer ~/Dev/personal/opp-cal__personal/components/FileUpload/file-upload.module.css | else | edit ~/Dev/personal/opp-cal__personal/components/FileUpload/file-upload.module.css | endif
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=1
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 7 - ((0 * winheight(0) + 0) / 1)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
7
normal! 015|
wincmd w
argglobal
if bufexists("components/OpportunityCard/index.tsx") | buffer components/OpportunityCard/index.tsx | else | edit components/OpportunityCard/index.tsx | endif
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=8
setlocal fml=1
setlocal fdn=20
setlocal fen
23
normal! zo
35
normal! zo
43
normal! zo
46
normal! zo
47
normal! zo
48
normal! zo
let s:l = 52 - ((26 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
52
normal! 015|
wincmd w
argglobal
if bufexists("styles/Submit.module.css") | buffer styles/Submit.module.css | else | edit styles/Submit.module.css | endif
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=1
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 40 - ((12 * winheight(0) + 11) / 23)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
40
normal! 0
wincmd w
argglobal
if bufexists("pages/index.tsx") | buffer pages/index.tsx | else | edit pages/index.tsx | endif
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=7
setlocal fml=1
setlocal fdn=20
setlocal fen
17
normal! zo
33
normal! zo
34
normal! zo
36
normal! zo
41
normal! zo
42
normal! zo
let s:l = 44 - ((12 * winheight(0) + 11) / 22)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
44
normal! 049|
wincmd w
5wincmd w
exe 'vert 1resize ' . ((&columns * 79 + 119) / 239)
exe '2resize ' . ((&lines * 1 + 24) / 49)
exe 'vert 2resize ' . ((&columns * 79 + 119) / 239)
exe '3resize ' . ((&lines * 44 + 24) / 49)
exe 'vert 3resize ' . ((&columns * 79 + 119) / 239)
exe '4resize ' . ((&lines * 23 + 24) / 49)
exe 'vert 4resize ' . ((&columns * 79 + 119) / 239)
exe '5resize ' . ((&lines * 22 + 24) / 49)
exe 'vert 5resize ' . ((&columns * 79 + 119) / 239)
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOFA
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
